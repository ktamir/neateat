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
  isLoading: boolean,
  fetchRestaurants: Function,
  error: ?NeatEatError
|};

export class RestaurantList extends Component<Props> {
  componentDidMount(): void {
    this.props.fetchRestaurants();
  }

  render() {
    const { isLoading, restaurants, error } = this.props;

    if (error) {
      return (
        <Alert
          className="restaurant-fetch-error"
          message={error.title}
          description={error.description}
          type="error"
        />
      );
    }

    if (restaurants.length === 0) {
      if (isLoading) {
        return <Spin tip="Loading..." />;
      }
      return <Card>No Restaurants matched :(</Card>;
    }

    return restaurants.map(restaurant =>
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  fetchRestaurants,
};

export const RestaurantListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
