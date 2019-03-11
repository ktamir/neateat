import { configure, mount, shallow } from 'enzyme/build';
import { RestaurantList } from '../RestaurantList/RestaurantList';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mockRestaurants } from './testConsts';

configure({ adapter: new Adapter() });

describe('RestaurantList', () => {
  const fetchRestaurants = jest.fn();

  beforeEach(() => {
    fetchRestaurants.mockClear();
  });

  it('should trigger fetch request', () => {
    mount(<RestaurantList restaurants={[]} fetchRestaurants={fetchRestaurants}
      isLoading={false} />);
    expect(fetchRestaurants).toHaveBeenCalledTimes(1);
  });

  it('should render restaurants correctly', () => {
    let restaurantCard = shallow(<RestaurantList restaurants={mockRestaurants} fetchRestaurants={fetchRestaurants}
      isLoading={false} />);
    expect(restaurantCard).toMatchSnapshot();
  });

  it('should render loading correctly', () => {
    let restaurantCard = shallow(<RestaurantList restaurants={[]} fetchRestaurants={fetchRestaurants}
      isLoading={true} />);
    expect(restaurantCard).toMatchSnapshot();
  });
});
