import React from 'react';
import './Filter.scss';
import { Select } from 'antd';

const Option = { Select };

export const Filter = () => {
  // Array with values ranging from 30 to 120 with differences of 10 (30, 40, 50, ..., 120)
  const speedRange = [...Array(10)].map((_, i) => 30 + i * 10);

  return (<div className="filter">
    <div className="filter-col">
      <div className="filter-type">Cuisine</div>
      <Select className="filter-select" placeholder="Italian, French, Burgers..." allowClear={true} size="large">
        <Option value="italian">Italian</Option>
        <Option value="french">French</Option>
        <Option value="burgers">Burgers</Option>
      </Select>
    </div>

    <div className="filter-col">
      <div className="filter-type">Rating</div>
      <Select className="filter-select" placeholder="1 to 3" allowClear={true} size="large">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
      </Select>
    </div>

    <div className="filter-col">
      <div className="filter-type">Speed</div>
      <Select className="filter-select" placeholder="30 to 120 minutes" allowClear={true} size="large">
        {speedRange.map(number => <Option key={number}>Up to {number} minutes</Option>)}
      </Select>
    </div>
  </div>);
};
