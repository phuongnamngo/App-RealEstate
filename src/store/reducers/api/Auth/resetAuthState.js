import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import {sliceInitialState} from './initialState';

export default {
  initialState: buildAsyncState('resetAuthState'),
  action: buildAsyncActions(
    'Auth/resetAuthState',
    async (args, {dispatch}) => {
      return sliceInitialState.item;
    },
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'resetAuthState.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'resetAuthState.loading',
      itemKey: 'item.resetAuthState',
    }),
    fulfilled: (state, {payload, type}) => {
      state.resetAuthState.loading = false;
      state.item = payload;
    },
  },
};
