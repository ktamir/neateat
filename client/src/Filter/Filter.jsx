// @flow
import React from 'react';
import './Filter.scss';
import { Select } from 'antd';

const Option = { Select };

export const Filter = () => {
  // Array with values ranging from 30 to 120 with differences of 10 (30, 40, 50, ..., 120)
  const speedRange = [...Array(10)].map((_, i) => 30 + i * 10);

  // To be retrieved from an API, etc...
  const cuisines = [{ key: 'italian', displayName: 'Italian' }, { key: 'french', displayName: 'French' },
    { key: 'burgers', displayName: 'Burgers' }];

  const ratingRange = [...Array(3)].map((_, i) => 1 + i);

  return (
    <div className="filter">
      <div className="filter-col">
        <div className="filter-type">Cuisine</div>
        <Select className="filter-select" placeholder="Italian, French, Burgers..." allowClear={true} size="large">
          {cuisines.map(cuisine => <Option value={cuisine.key} key={cuisine.key}>{cuisine.displayName}</Option>)}
        </Select>
      </div>

      <div className="filter-col">
        <div className="filter-type">Rating</div>
        <Select className="filter-select" placeholder="1 to 3" allowClear={true} size="large">
          {ratingRange.map(ratingOption => <Option value={ratingOption} key={ratingOption}>{ratingOption}</Option>)}
        </Select>
      </div>

      <div className="filter-col">
        <div className="filter-type">Speed</div>
        <Select className="filter-select" placeholder="30 to 120 minutes" allowClear={true} size="large">
          {speedRange.map(number => <Option key={number}>Up to {number} minutes</Option>)}
        </Select>
      </div>
    </div>
  );
};
