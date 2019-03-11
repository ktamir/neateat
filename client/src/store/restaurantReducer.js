// @flow

import { Action } from 'redux';

import type { NeatEatError, Restaurant } from '../flowTypes';
import { FETCH_RESTAURANTS_ERROR, FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS } from '../consts';

type State = {|
  restaurants: Array<Restaurant>,
  isLoading: boolean,
  error?: NeatEatError
|};

const initialState = { restaurants: [], isLoading: false, error: null };

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_RESTAURANTS_SUCCESS:
      return { ...state, isLoading: false, restaurants: action.data, error: null };
    case FETCH_RESTAURANTS_ERROR:
      const { error, exception } = action.error;
      return { ...state, isLoading: false, error: { title: error, description: exception } };
    default:
      return state;
  }
};
