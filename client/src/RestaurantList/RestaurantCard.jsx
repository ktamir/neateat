// @flow

import { Card } from 'antd';
import React from 'react';
import './RestaurantCard.scss';
import type { Restaurant } from '../flowTypes';

type Props = {
  restaurant: Restaurant
}

export const RestaurantCard = (props: Props) => {
  const { name, accepts10bis, rating } = props.restaurant;
  return (<Card className="restaurant-card">
    <div className="card-details">
      <h3>{name}</h3>
      {accepts10bis && <span className="ten-bis">10bis</span>}
      <div>Rating: {Array.from({ length: rating }, (_, i) =>
        <span aria-label="star" role="img" key={i}>⭐</span>)}</div>
    </div>
  </Card>);
};
