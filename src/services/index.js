import axios from 'axios';
import handleError from './utils/handleError';
import { API_URL } from '../constants/constants';

const api = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

api.defaults.withCredentials = true;

api.interceptors.request.use(async config => {
  config.url = API_URL + config.url;
  return config;
});

api.interceptors.response.use(
  response => response,
  ({ message, response = {} }) => {
    const { data, status } = response;
    return handleError({ message, data, status });
  },
);

export { api, handleError };
