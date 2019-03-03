// @flow

import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { AppHeader } from './AppHeader/AppHeader.jsx';
import { Filter } from './Filter/Filter.jsx';
import RestaurantList from './RestaurantList/RestaurantList.jsx';

const { Content } = Layout;

// To be replaced by redux store
const restaurants = [{
  id: '0',
  name: 'Chez Tamir',
  cuisine: 'French',
  rating: 2,
  address: '7 Volman Yehuda, Tel Aviv, Israel',
  deliveryTime: 50,
  accepts10Bis: true,
},
{
  id: '1',
  name: 'Mina Tomei',
  cuisine: 'Asian',
  rating: 3,
  address: '4 Ha\'raba\'a, Tel Aviv, Israel',
  deliveryTime: 60,
  accepts10Bis: true,
}];

export default () => {
  return (
    <div className="neateat-app">
      <Layout>
        <AppHeader/>
        <Filter/>
        <Content>
          <RestaurantList props={restaurants}/>
        </Content>
      </Layout>
    </div>
  );
};
