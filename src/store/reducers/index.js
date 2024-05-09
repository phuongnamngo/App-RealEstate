import {combineReducers} from 'redux';
import auth from './auth';
import token from './token';
import api from './api';
import system from './system';
export const sensitiveReducer = combineReducers({
  token,
});
export const mainReducer = combineReducers({auth, system});
export const apiReducer = combineReducers(api);
