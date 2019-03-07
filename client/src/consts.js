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

// Used in test snapshots
export const mockRestaurants = [
  {
    id: 1,
    name: 'Chez Tamir',
    cuisine: 'French',
    rating: 2,
    address: '144 Derech Menachem Begin, Tel Aviv, Israel',
    maxDeliveryTime: 60,
    accepts10Bis: true,
  },
  {
    id: 2,
    name: 'Tamir Trattoria',
    cuisine: 'Italian',
    rating: 1,
    address: '7 Derech Namir, Tel Aviv, Israel',
    maxDeliveryTime: 100,
    accepts10Bis: true,
  },
];
