import React from 'react';
import { Input } from 'antd';
import { Layout } from 'antd';
import './AppHeader.scss';

export const AppHeader = () => (<Layout.Header className="app-header">
  <h1 className="main-title">NeatEat</h1>
  <h3 className="secondary-title">Never get hungry again.</h3>
  <Input.Search
    placeholder="Find a restaurant..."
    size="large"
    className="search-restaurant-input"
  />
</Layout.Header>);
