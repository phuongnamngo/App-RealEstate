import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { wrapApi } from '@/services/utils/handleService';
import { loadProfile, updateProfile } from '@/actions/Auth/auth';
import { getProfileService, onUpdateProfileService } from '@/services/Auth';

export default {
  initialState: buildAsyncState('updateProfile'),
  action: buildAsyncActions('Auth/updateProfile', async (args, { dispatch }) => {
    const response = await wrapApi(onUpdateProfileService, args);
    if (response.statuscode === 200) {
      const res = await wrapApi(getProfileService, args);
      if (res.statuscode === 200) {
        dispatch(loadProfile(res.data));
      }
    }
    return response;
  }),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'updateProfile.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'updateProfile.loading',
      itemKey: 'item.updateProfile',
    }),
    fulfilled: (state, { payload, type }) => {
      state.updateProfile.loading = false;
    },
  }
};
