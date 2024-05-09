import {REMOVE_TOKEN, UPDATE_TOKEN} from '@/actions/Auth/type';

const initialState = {accessToken: null, refreshToken: null, expire: 0};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
        // refreshToken: payload.refreshToken,
        // expire: payload.expire,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
