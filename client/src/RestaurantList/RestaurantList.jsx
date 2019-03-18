// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Card, Spin } from 'antd';

import { RestaurantCard } from './RestaurantCard';
import type { NeatEatError, Restaurant } from '../flowTypes';
import { fetchRestaurants } from '../store/restaurantActions';

import './RestaurantList.scss';

type Props = {|
  restaurants: Array<Restaurant>,
  fetchRestaurantsInProgress: boolean,
  fetchRestaurants: Function,
  fetchRestaurantsError: ?NeatEatError
|};

export class RestaurantList extends Component<Props> {
  componentDidMount(): void {
    this.props.fetchRestaurants();
  }

  render() {
    const { fetchRestaurantsInProgress, restaurants, fetchRestaurantsError } = this.props;

    if (fetchRestaurantsError) {
      return (
        <Alert
          className="restaurant-fetch-error"
          message={fetchRestaurantsError.title}
          description={fetchRestaurantsError.description}
          type="error"
        />
      );
    }

    if (fetchRestaurantsInProgress) {
      return <Spin tip="Loading..." />;
    }

    if (restaurants.length === 0) {
      return <Card>No Restaurants matched :(</Card>;
    }

    return (
      <div>
        {restaurants.map(restaurant =>
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
      </div>
    );
  }
}

const mapStateToProps = state => state.restaurants;

const mapDispatchToProps = {
  fetchRestaurants,
};

export const RestaurantListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
