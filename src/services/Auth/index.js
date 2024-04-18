import { api } from "..";
import { toRaws } from "../utils/handleRaws";

export const signInService = async payload => {
    const response = await api.post('app/login', toRaws(payload));
    return response.data;
};
export const getProfileService = async (payload, options) => {
    const response = await api.post('app/res.users/search', {}, options);
    return response.data;
};
export const refreshTokenService = async (payload, options) => {
    const response = await api.post(
        'app/refresh-token',
        toRaws(payload),
        options,
    );
    return response.data;
};