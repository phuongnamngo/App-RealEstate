import axios from 'axios';
import handleError from '@/services/utils/handleError';
import { API_URL } from '@env';

const api = axios.create({
  headers: {
    Accept: 'application/json',
  },
  timeout: 1000,
});

api.defaults.withCredentials = true;

api.interceptors.request.use(async config => {
  config.url = API_URL + config.url;
  return config;
});

api.interceptors.response.use(
  response => response,
  ({message, response = {}}) => {
    const {data, status} = response;
    return handleError({message, data, status});
  },
);

export {api, handleError};
