// @flow

import { camelizeKeys, decamelizeKeys } from 'humps';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


export default () => {
  // Request interceptor
  axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    // Change JSON keys to underscore
    config.data = decamelizeKeys(config.data);
    return config;
  });

  // Response interceptor
  axios.interceptors.response.use((response: AxiosResponse): AxiosRequestConfig => {
    // Change underscore to camel case
    response.data = camelizeKeys(response.data);
    return response;
  });
};
