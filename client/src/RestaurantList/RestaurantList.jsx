// @flow

import React, { Component } from 'react';
import { RestaurantCard } from './RestaurantCard';
import type { Restaurant } from '../flowTypes';
import { fetchRestaurants } from '../store/restaurantActions';
import { connect } from 'react-redux';
import { Spin } from 'antd';

type Props = { restaurants: Array<Restaurant>, isLoading: boolean, fetchRestaurants: Function };

export class RestaurantList extends Component<Props> {
  componentDidMount(): void {
    this.props.fetchRestaurants();
  }

  render() {
    const { isLoading, restaurants } = this.props;
    return (
      <div className="restaurant-list">
        {
          isLoading ? <Spin tip="Loading..." /> :
            restaurants.map(restaurant =>
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ fetchRestaurants: () => dispatch(fetchRestaurants) });

export const RestaurantListContainer = connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
