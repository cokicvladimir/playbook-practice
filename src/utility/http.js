import axios from 'axios';

import StorageService from './storageService';
import { setAuthInfo } from '../store/modules/auth';
import { setLoading, constants } from '../store/modules/loading';
import { store } from '../index';

export const AUTH = 'auth';
export const ACCESS_TOKEN = 'auth_token';
export const API_URL = process.env.REACT_APP_API_URL;

export const getHeaders = storage => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (storage.has(AUTH)) {
    const auth = JSON.parse(storage.get(AUTH));
    return { ...headers, Authorization: `Token ${auth[ACCESS_TOKEN]}` };
  }

  return headers;
};

const http = axios.create({
  headers: getHeaders(StorageService),
  baseURL: API_URL,
});

http.interceptors.request.use(
  config => {
    store.dispatch(setLoading(constants.INCREMENT));

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    store.dispatch(setLoading(constants.DECREMENT));
    return response;
  },
  error => {
    store.dispatch(setLoading(constants.DECREMENT));
    if (error && error.response) {
      if (error.response.status === 401) {
        StorageService.clear();
        store.dispatch(setAuthInfo({}));
        http.defaults.headers = getHeaders(StorageService);
        // redirect to login pags
      } else if (error.response.status === 404) {
        // show not found message
      } else if (error.response.data) {
        // handle error from server
      }
    } else {
      // alert('Oops! Something went wrong.');
    }

    return Promise.reject(error);
  }
);

export default http;
