// @flow

import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Provider } from 'react-redux';

import { AppHeaderContainer } from './AppHeader/AppHeader';
import { Filter } from './Filter/Filter';
import { store } from './store';
import { RestaurantListContainer } from './RestaurantList/RestaurantList';


const { Content } = Layout;

export default () => {
  return (
    <Provider store={store}>
      <div className="neateat-app">
        <Layout>
          <AppHeaderContainer />
          <Filter />
          <Content>
            <RestaurantListContainer />
          </Content>
        </Layout>
      </div>
    </Provider>
  );
};
