import {
    buildAsyncState,
    buildAsyncReducers,
    buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { wrapApi } from '@/services/utils/handleService';
import { updatePasswordService } from '@/services/Auth';

export default {
    initialState: buildAsyncState('updatePassword'),
    action: buildAsyncActions(
        'Auth/updatePassword',
        async (args, { dispatch }) => {
            const response = await wrapApi(updatePasswordService, args);
            return response;
        }
    ),
    reducers: {
        ...buildAsyncReducers({
            errorKey: 'updatePassword.error', // Optionally, if you scoped variables, you can use a key with dot notation
            loadingKey: 'updatePassword.loading',
            itemKey: 'item.updatePassword',
        }),
        fulfilled: (state, { payload, type }) => {
            state.updatePassword.loading = false;
        },
    }
};
