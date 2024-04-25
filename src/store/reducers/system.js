import {
  APP_ERROR,
  APP_LOADING,
  APP_MAINTENANCE,
  APP_POPUP_CONFIRM,
  // APP_POPUP_ERROR,
  APP_POPUP_SUCCESS,
  APP_POPUP_SUCCESS_EVALUATE,
  REMOTE_CONFIG,
  URL_CONFIG,
} from '@/actions/System/type';

const initialState = {loading: 0};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case APP_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case APP_POPUP_SUCCESS:
      return {
        ...state,
        success: payload.success,
      };
    case APP_POPUP_SUCCESS_EVALUATE:
      return {
        ...state,
        successPopup: payload.success,
      };
    // case APP_POPUP_ERROR:
    //   return {
    //     ...state,
    //     error: payload.error,
    //   };
    case APP_MAINTENANCE:
      return {
        ...state,
        maintenance: payload.maintenance,
      };
    case APP_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case REMOTE_CONFIG:
      return {
        ...state,
        initializedFirebase: payload.initializedFirebase,
      };
    case URL_CONFIG: {
      return {
        ...state,
        initializedUrl: payload.initializedUrl,
      };
    }
    case APP_POPUP_CONFIRM:
      return {
        ...state,
        confirm: payload.data,
      };
    default:
      return state;
  }
}
