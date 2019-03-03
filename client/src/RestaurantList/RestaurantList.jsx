// @flow
import React, { Component } from 'react';
import { RestaurantCard } from './RestaurantCard';
import type { Restaurant } from '../flowTypes';

type Props = { restaurants: Array<Restaurant> }

class RestaurantList extends Component<Props> {
  render() {
    return (
      <div className="restaurant-list">
        {this.props.restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>)}
      </div>
    );
  }
}

export default RestaurantList;
