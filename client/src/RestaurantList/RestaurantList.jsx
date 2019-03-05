// @flow

import React, { Component } from 'react';
import { RestaurantCard } from './RestaurantCard';
import type { Restaurant } from '../flowTypes';
import { fetchRestaurants } from '../store/restaurantActions';
import { connect } from 'react-redux';

type Props = { restaurants: Array<Restaurant>, fetchRestaurants: Function };

class RestaurantList extends Component<Props> {
  componentDidMount(): void {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div className="restaurant-list">
        {this.props.restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({ fetchRestaurants: () => dispatch(fetchRestaurants) });

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
