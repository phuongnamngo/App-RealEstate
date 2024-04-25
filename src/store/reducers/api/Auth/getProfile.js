import {
    buildAsyncState,
    buildAsyncReducers,
    buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { wrapApi } from '@/services/utils/handleService';
import { getProfileService } from '@/services/Auth';
import { loadProfile } from '@/actions/Auth/auth';

export default {
    initialState: buildAsyncState('getProfile'),
    action: buildAsyncActions(
        'Auth/getProfile',
        async (args, { dispatch }) => {
            const response = await wrapApi(getProfileService, args);
            dispatch(loadProfile(response));
            return response;
        }
    ),
    reducers: {
        ...buildAsyncReducers({
            errorKey: 'getProfile.error', // Optionally, if you scoped variables, you can use a key with dot notation
            loadingKey: 'getProfile.loading',
            itemKey: 'item.getProfile',
        }),
        fulfilled: (state, { payload, type }) => {
            state.getProfile.loading = false;
        },
    }
};
