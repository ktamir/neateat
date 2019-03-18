// @flow

import type { NeatEatAction, NeatEatError, NeatEatFilterAction, Restaurant } from '../flowTypes';
import {
  ADD_RESTAURANT_ERROR,
  ADD_RESTAURANT_REQUEST, ADD_RESTAURANT_SUCCESS, SET_FILTER,
  FETCH_RESTAURANTS_ERROR,
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
} from '../consts';

type Filters = {|
  rating: ?number,
  cuisine: ?string,
  maxDeliveryTime: ?number,
  name: string,
|}

type State = {|
  restaurants: Array<Restaurant>,
  fetchRestaurantsInProgress: boolean,
  addRestaurantInProgress: boolean,
  fetchRestaurantsError: ?NeatEatError,
  addRestaurantError: ?NeatEatError,
  filters: Filters,
|};

const initialFilters = { rating: null, cuisine: null, maxDeliveryTime: null, name: '' };

const initialState = {
  restaurants: [], fetchRestaurantsInProgress: false, addRestaurantInProgress: false,
  fetchRestaurantsError: null, addRestaurantError: null, filters: initialFilters,
};

const filterReducer = (state: Filters = initialFilters, action: NeatEatFilterAction) => {
  switch (action.type) {
    case SET_FILTER:
      console.log(action);
      return { ...state, [action.filter.key]: action.filter.value };
    default:
      return state;
  }
};

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
        restaurants: [...state.restaurants, action.restaurant],
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
    case SET_FILTER:
      return { ...state, filters: filterReducer(state.filters, action) };
    default:
      return state;
  }
};
