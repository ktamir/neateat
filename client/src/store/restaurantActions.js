// @flow

import { ADD_RESTAURANT_REQUEST, FETCH_RESTAURANTS_REQUEST } from '../consts';
import type { NeatEatDataAction, NeatEatPlainAction, Restaurant } from '../flowTypes';

export const fetchRestaurants = (): NeatEatPlainAction => ({ type: FETCH_RESTAURANTS_REQUEST });

export const addRestaurant = (data: Restaurant): NeatEatDataAction => ({ type: ADD_RESTAURANT_REQUEST, data });
