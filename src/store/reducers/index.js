import { combineReducers } from "redux";
import auth from './auth';
import token from './token';
import api from './api';
export const sensitiveReducer = combineReducers({
    token,
});
export const mainReducer = combineReducers({ auth });
export const apiReducer = combineReducers(api);