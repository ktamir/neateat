import { configure, mount, shallow } from 'enzyme/build';
import { RestaurantList, RestaurantListContainer } from '../RestaurantList/RestaurantList';
import { Provider } from 'react-redux';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16/build';
import { FETCH_RESTAURANTS_REQUEST, mockRestaurants } from '../consts';

configure({ adapter: new Adapter() });

describe('RestaurantList', () => {
  let store;
  let fetchRestaurants;

  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({ restaurants: [] });

    fetchRestaurants = jest.fn();
  });

  it('should trigger fetch request', () => {
    mount(<RestaurantList restaurants={[]} fetchRestaurants={fetchRestaurants}
      isLoading={false} />);
    expect(fetchRestaurants).toBeCalled();
  });

  it('should trigger fetch request action creator', () => {
    mount(<Provider store={store}><RestaurantListContainer /></Provider>);

    expect(store.getActions()).toEqual(
      [
        { type: FETCH_RESTAURANTS_REQUEST },
      ]);
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
