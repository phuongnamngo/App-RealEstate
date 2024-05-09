import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { getDistrictService } from '@/services/Address';
import { mapSelectionDistricts, mapSelectionWards } from '@/utils/Zone';
import { wrapApi } from '@/services/utils/handleService';

export default {
  initialState: buildAsyncState('loadDistricts'),
  action: buildAsyncActions(
    'General/loadDistricts',
    async (args, {dispatch}) => {
      return await wrapApi(getDistrictService, args.code);
    },
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'loadDistricts.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'loadDistricts.loading',
      itemKey: 'item.loadDistricts',
    }),
    fulfilled: (state, {payload, type}) => {
      state.loadDistricts.loading = false;
      state.item.loadDistricts = mapSelectionDistricts(
        payload.data || [],
      );
      if (payload.resetState) {
        state.item.loadWards = mapSelectionWards([]);
      }
    },
  },
};
