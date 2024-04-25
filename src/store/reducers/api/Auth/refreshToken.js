import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { wrapApi } from '@/services/utils/handleService';
import { refreshTokenService } from '@/services/Auth';

export default {
  initialState: buildAsyncState('refreshToken'),
  action: buildAsyncActions(
    'Auth/refreshToken',
    async (args, { dispatch }) => {
      return await wrapApi(refreshTokenService, args);
    }
  ),
  reducers: buildAsyncReducers({
    errorKey: 'refreshToken.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'refreshToken.loading',
    itemKey: 'item.refreshToken',
  }),
};
