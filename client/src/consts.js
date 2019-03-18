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

export const ADD_RESTAURANT_REQUEST = 'ADD_RESTAURANT_REQUEST';

export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';

export const ADD_RESTAURANT_ERROR = 'ADD_RESTAURANT_ERROR';

export const SHOW_ADD_RESTAURANT_MODAL = 'SHOW_ADD_RESTAURANT_MODAL';

export const HIDE_ADD_RESTAURANT_MODAL = 'HIDE_ADD_RESTAURANT_MODAL';

export const ratingRange: Array<number> = [...Array(3)].map((_, i) => 1 + i);
