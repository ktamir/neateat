import { shallow } from 'enzyme';
import React from 'react';
import { RestaurantCard } from '../RestaurantList/RestaurantCard';
import { mockRestaurants } from './testConsts';

describe('RestaurantCard', () => {
  it('should render correctly', () => {
    const mockRestaurant = mockRestaurants[0];
    const restaurantCard = shallow(<RestaurantCard restaurant={mockRestaurant} />);
    expect(restaurantCard).toMatchSnapshot();
  });
});
