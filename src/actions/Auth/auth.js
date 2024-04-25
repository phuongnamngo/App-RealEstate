
import axios from 'axios';
import {RESET_GOAL} from '../Goal/type';
import {RESET_TARGET} from '../Target/type';
import {
  LOGIN,
  UPDATE_TOKEN,
  LOGOUT,
  GET_PROFILE,
  REMOVE_TOKEN,
  UPDATE_PHONE_NUMBER,
} from './type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_LATEST_USERNAME } from '../../constants/option';

export const login = data => dispatch => {
  try {
    let {
      token: accessToken,
      // refresh_token: refreshToken,
      // token_expired_in: timeEnd,
    } = data;
    axios.defaults.withCredentials = true;
    dispatch({
      type: UPDATE_TOKEN,
     // payload: {accessToken, refreshToken, expire: timeEnd},
     payload: {accessToken},
    });
    dispatch({
      type: LOGIN,
    });
    return;
  } catch (error) {
    throw error;
  }
};

export const logout = data => dispatch => {
  try {
    dispatch({
      type: LOGOUT,
    });
    dispatch({
      type: REMOVE_TOKEN,
    });
  } catch (error) {
    throw error;
  }
};

export const updateToken = data => dispatch => {
  let {
    access_token: accessToken,
    refresh_token: refreshToken,
    token_expired_in: timeEnd,
  } = data;
  try {
    dispatch({
      type: UPDATE_TOKEN,
      payload: {accessToken, refreshToken, expire: timeEnd},
    });
  } catch (error) {
    throw error;
  }
};

export const loadProfile = data => dispatch => {
  try {
    dispatch({
      type: GET_PROFILE,
      payload: {infoUser: data},
    });
  } catch (error) {
    throw error;
  }
};

export const updateProfile = data => (dispatch, getState) => {
  try {
    const infoUser = getState().main.auth.infoUser;
    const mergeArrays = (arr1, arr2) => {
      return arr1.map(obj1 => {
        const matchingObj2 = arr2.find(obj2 => true);
        if (matchingObj2) {
          return {...obj1, ...matchingObj2};
        }
        return obj1;
      });
    };
    const resultArray = mergeArrays(infoUser, data);
    dispatch({
      type: GET_PROFILE,
      payload: {infoUser: resultArray},
    });
  } catch (error) {
    throw error;
  }
};

//  Handle save Latest Username from View Login
export const saveLatestUsername = async data => {
  //  export const handleLatestEmail = async (data) => {
  try {
    let {username} = data;
    await AsyncStorage.setItem(TOKEN_LATEST_USERNAME, username);
  } catch (error) {
    throw new Error(error);
  }
};

//  get Latest Username from localStorage
export const getLatestUsername = async () => {
  try {
    let latestUsername = await AsyncStorage.getItem(TOKEN_LATEST_USERNAME);
    return latestUsername;
  } catch (error) {
    // console.log('getLatestEmail', error);
    return null;
  }
};

export const updatePhoneNumber = data => dispatch => {
  try {
    dispatch({
      type: UPDATE_PHONE_NUMBER,
      payload: {phoneNumber: data},
    });
  } catch (error) {
    throw error;
  }
};
