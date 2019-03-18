// @flow

import { HIDE_ADD_RESTAURANT_MODAL, SHOW_ADD_RESTAURANT_MODAL } from '../consts';

export const showAddRestaurantModal = () => ({ type: SHOW_ADD_RESTAURANT_MODAL });

export const hideAddRestaurantModal = () => ({ type: HIDE_ADD_RESTAURANT_MODAL });
