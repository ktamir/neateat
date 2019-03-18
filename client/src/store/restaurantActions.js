// @flow

import { ADD_RESTAURANT_REQUEST, FETCH_RESTAURANTS_REQUEST, SET_FILTER } from '../consts';
import type { Filter, NeatEatFilterAction, NeatEatAddRestaurantAction, NeatEatPlainAction, Restaurant } from '../flowTypes';

export const fetchRestaurants = (): NeatEatPlainAction => ({ type: FETCH_RESTAURANTS_REQUEST });

export const addRestaurant = (data: Restaurant): NeatEatAddRestaurantAction => ({
  type: ADD_RESTAURANT_REQUEST,
  restaurant: data,
});

export const changeFilter = (filter: Filter): NeatEatFilterAction => ({ type: SET_FILTER, filter });
