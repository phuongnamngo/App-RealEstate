import { getAccessToken } from './useToken';
import { store } from '@/store';
import { appLoading } from '@/actions/System/system';
import logoutApi from '@/store/reducers/api/Auth/logoutApi';

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
    options.headers = { 'Authorization': `Bearer ${accessToken}` };
  }

  const rs = await apiService(args, options).catch(error => {
    if (supportLoading) {
      store.dispatch(appLoading(false));
    }
    return Promise.reject(error);
  });

  if (rs?.status === 401) {
    store.dispatch(logoutApi.action());
    return Promise.reject({ error: 'UnauthorizedError' });
  }

  if (supportLoading) {
    store.dispatch(appLoading(false));
  }
  return rs;
};
