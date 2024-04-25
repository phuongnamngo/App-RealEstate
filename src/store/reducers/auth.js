import { LOGIN, LOGOUT, GET_PROFILE, UPDATE_PHONE_NUMBER } from "@/actions/Auth/type";

const initialState = { isLoggedIn: false, infoUser: {}, phoneNumber: '' };

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                infoUser: {},
            };
        case GET_PROFILE:
            return {
                ...state,
                infoUser: payload.infoUser,
            };
        case UPDATE_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: payload.phoneNumber,
            };
        default:
            return state;
    }
}
