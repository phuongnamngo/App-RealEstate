import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper';
import { sliceInitialState } from './initialState';
import resetAuthState from './resetAuthState';
import register from './register';
import signIn from './signIn';
import signOut from './signOut';
import refreshToken from './refreshToken';
import logoutApi from './logoutApi';
import getProfile from './getProfile';
//endAppendAction

const listReducer = [
  resetAuthState,
  register,
  signIn,
  signOut,
  refreshToken,
  logoutApi,
  getProfile
  //endAppendToReducer
];

export default buildSlice(
  'Auth',
  listReducer,
  sliceInitialState,
).reducer;
