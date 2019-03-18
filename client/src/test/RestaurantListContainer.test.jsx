import { mount } from 'enzyme/build';
import { RestaurantListContainer } from '../RestaurantList/RestaurantList';
import { Provider } from 'react-redux';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { fetchRestaurants } from '../store/restaurantActions';

describe('RestaurantListContainer', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    restaurants: {
      restaurants: [],
      fetchRestaurantsInProgress: false,
      addRestaurantInProgress: false,
      fetchRestaurantsError: null,
      addRestaurantError: null,
    },
  });

  it('should trigger fetch request action creator', () => {
    mount(<Provider store={store}><RestaurantListContainer /></Provider>);

    expect(store.getActions()).toEqual([fetchRestaurants()]);
  });
});
