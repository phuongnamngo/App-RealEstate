import {
  APP_LOADING,
  APP_MAINTENANCE,
  APP_ERROR,
  // APP_POPUP_ERROR,
  APP_POPUP_SUCCESS,
  APP_POPUP_SUCCESS_EVALUATE,
  REMOTE_CONFIG,
  URL_CONFIG,
  APP_POPUP_CONFIRM,
} from './type';

export const appLoading = loading => (dispatch, getState) => {
  dispatch({
    type: APP_LOADING,
    payload: {
      loading: loading,
    },
  });
  return;
};

export const appSuccess = success => dispatch => {
  dispatch({
    type: APP_POPUP_SUCCESS,
    payload: {success},
  });
  return;
};
export const appSuccessPopup = success => dispatch => {
  dispatch({
    type: APP_POPUP_SUCCESS_EVALUATE,
    payload: {success},
  });
  return;
};
export const appPopupConfirm = data => dispatch => {
  dispatch({
    type: APP_POPUP_CONFIRM,
    payload: {data},
  });
  return;
};

// export const appError = error => dispatch => {
//   dispatch({
//     type: APP_POPUP_ERROR,
//     payload: {error},
//   });
//   return;
// };

export const appMaintenance = maintenance => dispatch => {
  dispatch({
    type: APP_MAINTENANCE,
    payload: {maintenance},
  });
};

export const appError = error => dispatch => {
  dispatch({
    type: APP_ERROR,
    payload: {error},
  });
};

export const setInitializedFirebase = initializedFirebase => dispatch => {
  dispatch({
    type: REMOTE_CONFIG,
    payload: {initializedFirebase},
  });
};

export const setInitializedUrl = initializedUrl => dispatch => {
  dispatch({
    type: URL_CONFIG,
    payload: {initializedUrl},
  });
};
