// @flow
import React, { Component } from 'react';
import { RestaurantCard } from './RestaurantCard';
import type { Restaurant } from '../flowTypes';

type State = Array<Restaurant>

class RestaurantList extends Component<{}, State> {
  state = {
    restaurants: [{
      name: 'Chez Tamir',
      cuisine: 'French',
      rating: 2,
      address: '7 Volman Yehuda, Tel Aviv, Israel',
      deliveryTime: 50,
      accepts10bis: true,
    },
    {
      name: 'Mina Tomei',
      cuisine: 'Asian',
      rating: 3,
      address: '4 Ha\'raba\'a, Tel Aviv, Israel',
      deliveryTime: 60,
      accepts10bis: true,
    }],
  };

  render() {
    return (<div className="restaurant-list">
      {this.state.restaurants.map(restaurant => <RestaurantCard restaurant={restaurant}/>)}
    </div>);
  }
}

export default RestaurantList;
