import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper';
import { sliceInitialState } from './initialState';
import resetGeneralState from './resetGeneralState';
import loadProvinces from './loadProvinces';
import loadDistricts from './loadDistricts';
import loadWards from './loadWards';
//endAppendAction

const listReducer = [
  resetGeneralState,
  loadProvinces,
  loadDistricts,
  loadWards
  //endAppendToReducer
];

export default buildSlice(
  'General',
  listReducer,
  sliceInitialState,
).reducer;
