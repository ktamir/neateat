// @flow

import React from 'react';
import { Input, Layout } from 'antd';
import { connect } from 'react-redux';

import { AddRestaurantModalContainer } from './AddRestaurant/AddRestaurantModal';
import { showAddRestaurantModal } from '../store/uiActions';

import './AppHeader.scss';
import addIcon from './add.png';

const { Search } = Input;

type Props = {|
  showAddRestaurantModal: Function
|};

export const AppHeader = (props: Props) => (
  <Layout.Header className="app-header">
    <img src={addIcon} className="add-restaurant" alt="Add Restaurant" onClick={props.showAddRestaurantModal} />
    <h1 className="main-title">NeatEat</h1>
    <h3 className="secondary-title">Never get hungry again.</h3>
    <Search
      placeholder="Find a restaurant..."
      size="large"
      className="search-restaurant-input"
    />
    <AddRestaurantModalContainer />
  </Layout.Header>
);

const mapDispatchToProps = {
  showAddRestaurantModal,
};

export const AppHeaderContainer = connect(null, mapDispatchToProps)(AppHeader);
