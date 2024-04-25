import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { wrapApi } from '@/services/utils/handleService';
import { signInService } from '@/services/Auth';

export default {
  initialState: buildAsyncState('signIn'),
  action: buildAsyncActions(
    'Auth/signIn',
    async (args, { dispatch }) => {
      return await wrapApi(signInService, args);
    }
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'signIn.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'signIn.loading',
      itemKey: 'item.signIn',
    }),
    fulfilled: (state, { payload, type }) => {
      state.signIn.loading = false;
    },
  }
};
