// @flow

import type { NeatEatAction, NeatEatError, Restaurant } from '../flowTypes';
import {
  ADD_RESTAURANT_ERROR,
  ADD_RESTAURANT_REQUEST, ADD_RESTAURANT_SUCCESS,
  FETCH_RESTAURANTS_ERROR,
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
} from '../consts';

type State = {|
  restaurants: Array<Restaurant>,
  fetchRestaurantsInProgress: boolean,
  addRestaurantInProgress: boolean,
  fetchRestaurantsError: ?NeatEatError,
  addRestaurantError: ?NeatEatError
|};

const initialState = { restaurants: [], fetchRestaurantsInProgress: false, addRestaurantInProgress: false,
  fetchRestaurantsError: null, addRestaurantError: null };

export default (state: State = initialState, action: NeatEatAction): State => {
  switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST:
      return { ...state, fetchRestaurantsInProgress: true, fetchRestaurantsError: null };
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, fetchRestaurantsInProgress: false, restaurants: action.data, fetchRestaurantsError: null };
    case FETCH_RESTAURANTS_ERROR: {
      const { error, exception } = action.error;
      return {
        ...state,
        fetchRestaurantsInProgress: false,
        fetchRestaurantsError: {
          title: error || 'Error fetching restaurants',
          description: exception,
        },
      };
    }
    case ADD_RESTAURANT_REQUEST:
      return { ...state, addRestaurantInProgress: true, addRestaurantError: null };
    case ADD_RESTAURANT_SUCCESS:
      return {
        ...state,
        addRestaurantInProgress: false,
        restaurants: [...state.restaurants, action.data],
        addRestaurantError: null,
      };
    case ADD_RESTAURANT_ERROR: {
      const { error, exception } = action.error;
      return {
        ...state, addRestaurantInProgress: false, addRestaurantError: {
          title: error || 'Error adding a new restaurant',
          description: exception,
        },
      };
    }
    default:
      return state;
  }
};
