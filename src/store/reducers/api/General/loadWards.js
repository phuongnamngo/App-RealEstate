import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { getWardsService } from '@/services/Address';
import { mapSelectionWards } from '@/utils/Zone';
import { wrapApi } from '@/services/utils/handleService';

export default {
  initialState: buildAsyncState('loadWards'),
  action: buildAsyncActions('General/loadWards', async (args, { dispatch }) => {
    return await wrapApi(getWardsService, args.code);
  }),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'loadWards.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'loadWards.loading',
      itemKey: 'item.loadWards',
    }),
    fulfilled: (state, { payload, type }) => {
      state.loadWards.loading = false;
      state.item.loadWards = mapSelectionWards(payload.data || []);
    },
  },
};
