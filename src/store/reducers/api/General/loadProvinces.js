import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { wrapApi } from '@/services/utils/handleService';
import { getProvincesService } from '@/services/Address';
import { mapSelectionProvinces } from '@/utils/Zone';

export default {
  initialState: buildAsyncState('loadProvinces'),
  action: buildAsyncActions(
    'General/loadProvinces',
    async (args, { dispatch }) => {
      return await wrapApi(getProvincesService, args);
    }
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'loadProvinces.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'loadProvinces.loading',
      itemKey: 'item.loadProvinces',
    }),
    fulfilled: (state, { payload, type }) => {
      state.loadProvinces.loading = false;
      state.item.loadProvinces = mapSelectionProvinces(payload.data || []);
    },
  }

};
