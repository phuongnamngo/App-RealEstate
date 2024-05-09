import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import {wrapApi} from '@/services/utils/handleService';
import {logoutService} from '@/services/Auth';
import {logout} from '@/actions/Auth/auth';
import resetAuthState from './resetAuthState';

export default {
  initialState: buildAsyncState('logoutApi'),
  action: buildAsyncActions('Auth/logoutApi', async (args, {dispatch}) => {
    const response = await wrapApi(logoutService, args);
    if (response.statuscode === 201) {
      const promises = [dispatch(resetAuthState.action({}))];
      Promise.all(promises).then(function () {
        dispatch(logout());
      });
    }
    return response;
  }),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'logoutApi.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'logoutApi.loading',
      itemKey: 'item.logoutApi',
    }),
    fulfilled: (state, {payload, type}) => {
      state.logoutApi.loading = false;
    },
  },
};
