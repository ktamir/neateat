// @flow

import { createSelector } from 'reselect';
import type { AppState, Restaurant } from '../flowTypes';

const restaurantSelector = (state: AppState) => state.restaurants.restaurants;
const cuisineSelector = (state: AppState) => state.restaurants.filters.cuisine;
const ratingSelector = (state: AppState) => state.restaurants.filters.rating;
const maxDeliveryTimeSelector = (state: AppState) => state.restaurants.filters.maxDeliveryTime;
const nameSelector = (state: AppState) => state.restaurants.filters.name;

const filterByName = (restaurant: Restaurant, name: string): boolean => !name || restaurant.name.includes(name);
const filterByCuisine = (restaurant: Restaurant, cuisine: string): boolean => !cuisine || restaurant.cuisine === cuisine;
const filterByRating = (restaurant: Restaurant, rating: number): boolean => !rating || restaurant.rating >= rating;
const filterByMaxDeliveryTime = (restaurant: Restaurant, maxDeliveryTime: number): boolean =>
  !maxDeliveryTime || restaurant.maxDeliveryTime <= maxDeliveryTime;

export const filteredRestaurants = createSelector(
  [restaurantSelector, cuisineSelector, ratingSelector, maxDeliveryTimeSelector, nameSelector],
  (restaurants: Array<Restaurant>, cuisine: string, rating: number, maxDeliveryTime: number,
    name: string): Array<Restaurant> => {
    return restaurants.filter((restaurant: Restaurant): boolean => {
      return filterByName(restaurant, name) && filterByCuisine(restaurant, cuisine) &&
        filterByRating(restaurant, rating) && filterByMaxDeliveryTime(restaurant, maxDeliveryTime);
    });
  },
);
