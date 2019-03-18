import { createSelector } from 'reselect';
import type { Restaurant } from '../flowTypes';

const restaurantSelector = state => state.restaurants.restaurants;
const cuisineSelector = state => state.restaurants.filters.cuisine;
const ratingSelector = state => state.restaurants.filters.rating;
const maxDeliveryTimeSelector = state => state.restaurants.filters.maxDeliveryTime;
const nameSelector = state => state.restaurants.filters.name;

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
