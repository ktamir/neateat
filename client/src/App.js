// @flow

import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { AppHeader } from './AppHeader/AppHeader.jsx';
import { Filter } from './Filter/Filter.jsx';
import RestaurantList from './RestaurantList/RestaurantList.jsx';

const { Content } = Layout;

export default () => {
  return (
    <div className="neateat-app">
      <Layout>
        <AppHeader/>
        <Filter/>
        <Content>
          <RestaurantList/>
        </Content>
      </Layout>
    </div>
  );
};
