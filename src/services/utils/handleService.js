import { getAccessToken, getRefreshToken } from './useToken';
import { store } from '@/Store';
import { debounce } from 'lodash';
import { updateToken } from '../../actions/Auth/auth';
import { appLoading, appMaintenance } from '../../actions/System/system';
import signOut from '../../reducers/api/Auth/signOut';
import refreshToken from '../../reducers/api/Auth/refreshToken';

const promiseRefreshToken = {
  count: 0,
  result: null,
};

const refreshTokenPromise = async () => {
  const _accessToken = getAccessToken();
  const _refreshToken = getRefreshToken();
  if (!_refreshToken) {
    return Promise.resolve({ error: 'Not fount refresh token' });
  }
  return store.dispatch(
    refreshToken.action({
      payload: { refresh_token: _refreshToken },
      options: {
        headers: {
          'access-token': `${_accessToken}`,
        },
      },
    }),
  );
};

const getRefreshTokenPromise = async callback => {
  if (promiseRefreshToken.count) {
    promiseRefreshToken.count += 1;
  } else {
    promiseRefreshToken.count = 1;
    promiseRefreshToken.result = refreshTokenPromise();
  }
  return promiseRefreshToken.result
    .then(rs => {
      promiseRefreshToken.count -= 1;
      if (promiseRefreshToken.count === 0) {
        promiseRefreshToken.result = null;
      }
      return Promise.resolve(rs);
    })
    .then(callback);
};

const debounceSignOut = debounce(() => store.dispatch(signOut.action({})), 200);

export const wrapApi = async (
  apiService,
  args,
  supportLoading = true,
  headerToken = true,
) => {
  if (supportLoading) {
    store.dispatch(appLoading(true));
  }
  const accessToken = getAccessToken();
  const options = {};

  if (accessToken && headerToken) {
    if (!options.headers) {
      options.headers = {};
    }
    options.headers = { 'access-token': `${accessToken}` };
  }
  var hookCancelToken;
  if (args?.hookCancelToken) {
    hookCancelToken = args.hookCancelToken;
    delete args.hookCancelToken;
    options.cancelToken = hookCancelToken.newCancelToken();
  }
  const rs = await apiService(args, options).catch(error => {
    if (supportLoading) {
      store.dispatch(appLoading(false));
    }
    if (
      (hookCancelToken && hookCancelToken.isCancel(error)) ||
      !error.message
    ) {
      return Promise.resolve(error);
    }
    if (error?.status === 503 && error?.data?.maintenance) {
      store.dispatch(appMaintenance(true));
    }
    return Promise.reject(error);
  });

  if (rs?.result?.code === 401) {
    return getRefreshTokenPromise(x => {
      if (x.error) {
        //FIXME: should navigate to login when 401
        if (x.payload?.status === 401) {
          debounceSignOut();
          return Promise.reject({ error: 'UnauthorizedError' });
        }
        return Promise.reject(x?.payload?.error || x.error);
      } else {
        store.dispatch(updateToken(x.payload.result));

        options.headers = { 'access-token': `${x.payload.result.access_token}` };
        if (hookCancelToken) {
          options.cancelToken = hookCancelToken.newCancelToken();
        }
        if (supportLoading) {
          store.dispatch(appLoading(false));
        }
        return Promise.resolve(apiService(args, options));
      }
    }).catch(e => {
      if (supportLoading) {
        store.dispatch(appLoading(false));
      }
      return e;
    });
  }
  if (supportLoading) {
    store.dispatch(appLoading(false));
  }
  return rs;
};
