// @flow

import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { AppHeader } from './AppHeader/AppHeader.jsx';
import { Filter } from './Filter/Filter.jsx';
import RestaurantList from './RestaurantList/RestaurantList.jsx';
import { store } from './store/store';
import { Provider } from 'react-redux';

const { Content } = Layout;

export default () => {
  return (
    <Provider store={store}>
      <div className="neateat-app">
        <Layout>
          <AppHeader/>
          <Filter/>
          <Content>
            <RestaurantList/>
          </Content>
        </Layout>
      </div>
    </Provider>
  );
};
