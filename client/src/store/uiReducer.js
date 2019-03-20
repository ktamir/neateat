// @flow

import { Action } from 'redux';

import {
  HIDE_ADD_RESTAURANT_MODAL,
  SHOW_ADD_RESTAURANT_MODAL,
} from '../consts';

export type UiState = {|
  isAddRestaurantModalVisible: boolean
|};

const initialState = { isAddRestaurantModalVisible: false };

export default (state: UiState = initialState, action: Action): UiState => {
  switch (action.type) {
    case SHOW_ADD_RESTAURANT_MODAL:
      return { ...state, isAddRestaurantModalVisible: true };
    case HIDE_ADD_RESTAURANT_MODAL:
      return { ...state, isAddRestaurantModalVisible: false };
    default:
      return state;
  }
};
