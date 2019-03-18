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
      if (name) {
        condition = condition && restaurant.name.includes(name);
      }
      return condition;
    });
  },
);
