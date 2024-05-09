import { api } from '@/services';

export const getProvincesService = async (payload, options) => {
    try {
        const response = await api.get('public/provinces');
        return response.data;
    } catch (error) {
        return error;
    }
};
export const getDistrictService = async (payload, options) => {
    try {
        const response = await api.get(`public/districts/${payload}`);
        return response.data;
    } catch (error) {
        return error;
    }

};
export const getWardsService = async (payload, options) => {
    try {
        const response = await api.get(`public/wards/${payload}`);
        return response.data;
    } catch (error) {
        return error;
    }

};