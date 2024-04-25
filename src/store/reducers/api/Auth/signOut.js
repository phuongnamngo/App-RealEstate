import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { wrapApi } from '@/services/utils/handleService';
import { signInService } from '@/services/Auth';

export default {
  initialState: buildAsyncState('signOut'),
  action: buildAsyncActions(
    'Auth/signOut',
    async (args, { dispatch }) => {
      //return await wrapApi(signInService, args);
      return {}
    }
  ),
  reducers: buildAsyncReducers({
    errorKey: 'signOut.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'signOut.loading',
    itemKey: 'item.signOut',
  }),
};
