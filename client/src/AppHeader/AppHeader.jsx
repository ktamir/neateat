// @flow

import React from 'react';
import { Input, Layout } from 'antd';
import './AppHeader.scss';

const { Search } = Input;

export const AppHeader = () => (<Layout.Header className="app-header">
  <h1 className="main-title">NeatEat</h1>
  <h3 className="secondary-title">Never get hungry again.</h3>
  <Search
    placeholder="Find a restaurant..."
    size="large"
    className="search-restaurant-input"
  />
</Layout.Header>);
