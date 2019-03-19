// @flow

import { createSelector } from 'reselect';
import type { AppState, Restaurant } from '../flowTypes';

const restaurantSelector = (state: AppState) => state.restaurants.restaurants;
const cuisineSelector = (state: AppState) => state.restaurants.filters.cuisine;
const ratingSelector = (state: AppState) => state.restaurants.filters.rating;
const maxDeliveryTimeSelector = (state: AppState) => state.restaurants.filters.maxDeliveryTime;
const nameSelector = (state: AppState) => state.restaurants.filters.name;

export const filteredRestaurants = createSelector(
  [restaurantSelector, cuisineSelector, ratingSelector, maxDeliveryTimeSelector, nameSelector],
  (restaurants, cuisine, rating, maxDeliveryTime, name) => {
    return restaurants.filter((restaurant: Restaurant): boolean => {
      let isMatched = true;
      if (name) {
        isMatched = isMatched && restaurant.name.includes(name);
      }
      if (cuisine) {
        isMatched = isMatched && restaurant.cuisine === cuisine;
      }
      if (rating) {
        isMatched = isMatched && restaurant.rating >= rating;
      }
      if (maxDeliveryTime) {
        isMatched = isMatched && restaurant.maxDeliveryTime <= maxDeliveryTime;
      }
      return isMatched;
    });
  },
);
