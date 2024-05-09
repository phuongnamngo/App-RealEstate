import { api } from '@/services';
import { toFormData } from "../utils/handleFormData";
import axios from 'axios';

export const signInService = async payload => {
    try {
        const response = await api.post('client/authentication', toFormData(payload));
        return response.data;
    } catch (error) {
        return error;
    }
};
export const registerService = async payload => {
    try {
        const response = await api.post('client', toFormData(payload));
        return response.data;
    } catch (error) {
        return error;
    }
};
export const getProfileService = async (payload, options) => {
    try {
        const response = await api.get('client', options);
        return response.data;
    } catch (error) {
        return error;
    }
};
export const updatePasswordService = async (payload, options) => {
    try {
        const response = await api.post('client/password', toFormData(payload), options);
        return response.data;
    } catch (error) {
        return error;
    }

};
export const logoutService = async (payload, options) => {
    try {
        const response = await api.post('client/logout', toFormData(payload),
            options);
        return response.data;
    } catch (error) {
        return error;
    }

};

export const onUpdateProfileService = async (payload, options) => {
    const response = await api.post(
        'client?_method=put',
        toFormData(payload),
        options
    );
    return response.data;
};

export const refreshTokenService = async (payload, options) => {
    const response = await api.post(
        'app/refresh-token',
        toFormData(payload),
        options,
    );
    return response.data;
};