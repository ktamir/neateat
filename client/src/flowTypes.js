// @flow

import type { RestaurantState } from './store/restaurantReducer';
import type { UiState } from './store/uiReducer';

export type Restaurant = {|
  id?: number,
  name: string,
  cuisine: string,
  rating: 1 | 2 | 3,
  address: string,
  maxDeliveryTime: number,
  accepts10Bis: boolean
|};

export type Filter = {|
  key: string,
  value: string | number,
|};

export type NeatEatError = {|
  title: string,
  description: string
|};

export type ServerError = {|
  error: string,
  exception: string
|};

export type NeatEatFetchRestaurantsAction = {|
  type: string,
  data: Array<Restaurant>
|};

export type NeatEatAddRestaurantAction = {|
  type: string,
  restaurant: Restaurant
|};

export type NeatEatErrorAction = {|
  type: string,
  error: ServerError
|};

export type NeatEatPlainAction = {|
  type: string
|};

export type NeatEatFilterAction = {|
  type: string,
  filter: Filter
|};

export type NeatEatAction = NeatEatFetchRestaurantsAction & NeatEatAddRestaurantAction & NeatEatErrorAction &
  NeatEatPlainAction & NeatEatFilterAction;

export type AppState = { restaurants: RestaurantState, ui: UiState };
