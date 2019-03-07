// @flow

import type { Restaurant } from '../flowTypes';
import { Action } from 'redux';

type State = {
  restaurants: Array<Restaurant>,
  isLoading: boolean
};

const initialState = { restaurants: [], isLoading: false };

export const restaurantReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS_REQUEST':
      return { ...state, isLoading: true };
    case 'FETCH_RESTAURANTS_SUCCESS':
      return { ...state, isLoading: false, restaurants: action.data };
    case 'FETCH_RESTAURANTS_FAILED':
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
