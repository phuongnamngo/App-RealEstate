import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { wrapApi } from '@/services/utils/handleService';
import { registerService } from '@/services/Auth';

export default {
  initialState: buildAsyncState('register'),
  action: buildAsyncActions(
    'Auth/register',
    async (args, { dispatch }) => {
      return await wrapApi(registerService, args);
    }
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'register.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'register.loading',
      itemKey: 'item.register',
    }),
    fulfilled: (state, { payload, type }) => {
      state.register.loading = false;
    },
  }
};
