// @flow

import { Card } from 'antd';
import React from 'react';
import type { Restaurant } from '../flowTypes';

import './RestaurantCard.scss';

type Props = {|
  restaurant: Restaurant
|}

export const RestaurantCard = (props: Props) => {
  const { name, accepts10Bis, rating } = props.restaurant;
  return (
    <Card className="restaurant-card">
      <div className="card-details">
        <h3>{name}</h3>
        {accepts10Bis && <span className="ten-bis">10bis</span>}
        <div>Rating: {Array.from({ length: rating }, (_, i) =>
          <span aria-label="star" role="img" key={i}>⭐</span>)}</div>
      </div>
    </Card>
  );
};
