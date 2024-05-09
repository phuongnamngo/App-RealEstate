import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import {sliceInitialState} from './initialState';

export default {
  initialState: buildAsyncState('resetGeneralState'),
  action: buildAsyncActions(
    'General/resetGeneralState',
    async (args, {dispatch}) => {
      return sliceInitialState.item;
    },
  ),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'resetGeneralState.error', // Optionally, if you scoped variables, you can use a key with dot notation
      loadingKey: 'resetGeneralState.loading',
      itemKey: 'item.resetGeneralState',
    }),
    fulfilled: (state, {payload, type}) => {
      state.resetGeneralState.loading = false;
      state.item = payload;
    },
  },
};
