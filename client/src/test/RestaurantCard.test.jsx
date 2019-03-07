import { configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16/build';
import { mockRestaurants } from '../consts';
import { RestaurantCard } from '../RestaurantList/RestaurantCard';

configure({ adapter: new Adapter() });

describe('RestaurantCard', () => {
  it('should render correctly', () => {
    let mockRestaurant = mockRestaurants[0];
    let restaurantCard = shallow(<RestaurantCard restaurant={mockRestaurant} />);
    expect(restaurantCard).toMatchSnapshot();
  });
});
