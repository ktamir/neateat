// @flow

import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';

import { cuisines } from '../consts';
import { ratingRange } from '../consts';
import { changeFilter } from '../store/restaurantActions';

import './Filter.scss';

type Props = {|
  changeFilter: Function
|};

export class Filter extends Component<Props> {

  onChangeFilter = (key: string, value: ?(string | number)): void => {
    this.props.changeFilter({ key, value });
  };

  render() {
    // Array with values ranging from 30 to 120 with differences of 10 (30, 40, 50, ..., 120)
    const speedRange = [...Array(10)].map((_, i) => 30 + i * 10);

    return (
      <div className="filter">

        <div className="filter-col">
          <div className="filter-type">Cuisine</div>
          <Select className="filter-select" placeholder="Italian, French, Burgers..." allowClear={true} size="large"
            onChange={(value: string) => this.onChangeFilter('cuisine', value)}>
            {cuisines.map(cuisine =>
              <Select.Option value={cuisine.key} key={cuisine.key}>{cuisine.displayName}</Select.Option>,
            )}
          </Select>
        </div>

        <div className="filter-col">
          <div className="filter-type">Minimum Rating</div>
          <Select className="filter-select" placeholder="1 to 3" allowClear={true} size="large"
            onChange={(value: number) => this.onChangeFilter('rating', value)}>
            {ratingRange.map(ratingOption =>
              <Select.Option value={ratingOption} key={ratingOption}>{ratingOption}</Select.Option>,
            )}
          </Select>
        </div>

        <div className="filter-col">
          <div className="filter-type">Speed</div>
          <Select className="filter-select" placeholder="30 to 120 minutes" allowClear={true} size="large"
            onChange={(value: string) => this.onChangeFilter('maxDeliveryTime', value)}>
            {speedRange.map(number => <Select.Option key={number}>Up to {number} minutes</Select.Option>)}
          </Select>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = {
  changeFilter,
};

export const FilterContainer = connect(null, mapDispatchToProps)(Filter);
