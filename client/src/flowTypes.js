// @flow

import * as actionTypes from 'actionTypes';

export type Restaurant = {
  name: string,
  cuisine: string,
  rating: number,
  address: string,
  deliveryTime: number,
  accepts10bis: boolean
};

export type FetchRestaurantsRequestAction = {
  type: actionTypes.FETCH_RESTAURANTS_REQUEST
};

export type FetchRestaurantsSuccessAction = {
  type: actionTypes.FETCH_RESTAURANTS_SUCCESS,
  data: Restaurant
};

export type FetchRestaurantsErrorAction = {
  type: actionTypes.FETCH_RESTAURANTS_SUCCESS,
  error: string
};

export type RestaurantAction = FetchRestaurantsRequestAction | FetchRestaurantsSuccessAction |
  FetchRestaurantsErrorAction;
