// @flow

import { ADD_RESTAURANT_REQUEST, SET_FILTER, FETCH_RESTAURANTS_REQUEST } from '../consts';
import type { Filter, NeatEatDataAction, NeatEatFilterAction, NeatEatPlainAction, Restaurant } from '../flowTypes';

export const fetchRestaurants = (): NeatEatPlainAction => ({ type: FETCH_RESTAURANTS_REQUEST });

export const addRestaurant = (data: Restaurant): NeatEatDataAction => ({ type: ADD_RESTAURANT_REQUEST, data });

export const changeFilter = (filter: Filter): NeatEatFilterAction => ({ type: SET_FILTER, filter });
