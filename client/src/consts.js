// @flow

export const API_URL = 'http://localhost:3000';

// To be retrieved from an API, etc...
export const cuisines = [
  {
    key: 'italian',
    displayName: 'Italian',
  },
  {
    key: 'french',
    displayName: 'French',
  },
  {
    key: 'burgers',
    displayName: 'Burgers',
  },
];

export const FETCH_RESTAURANTS_REQUEST = 'FETCH_RESTAURANTS_REQUEST';

export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';

export const FETCH_RESTAURANTS_ERROR = 'FETCH_RESTAURANTS_ERROR';
