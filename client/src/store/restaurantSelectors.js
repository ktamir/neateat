import { createSelector } from 'reselect';
import type { Restaurant } from '../flowTypes';

const restaurantSelector = state => state.restaurants.restaurants;
const cuisineSelector = state => state.restaurants.filters.cuisine;
const ratingSelector = state => state.restaurants.filters.rating;
const maxDeliveryTimeSelector = state => state.restaurants.filters.maxDeliveryTime;

export const filteredRestaurants = createSelector(
  [restaurantSelector, cuisineSelector, ratingSelector, maxDeliveryTimeSelector],
  (restaurants, cuisine, rating, maxDeliveryTime) => {
    return restaurants.filter((restaurant: Restaurant): boolean => {
      let condition = true;
      if (cuisine) {
        condition = condition && restaurant.cuisine === cuisine;
      }
      if (rating) {
        condition = condition && restaurant.rating >= rating;
      }
      if (maxDeliveryTime) {
        condition = condition && restaurant.maxDeliveryTime <= maxDeliveryTime;
      }
      return condition;
    });
  },
);
