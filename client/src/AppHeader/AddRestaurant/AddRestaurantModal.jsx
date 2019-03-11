// @flow

import React from 'react';
import { Modal } from 'antd';
import { AddRestaurantFormContainer } from './AddRestaurantForm';
import { connect } from 'react-redux';
import { hideAddRestaurantModal } from '../../store/uiActions';

type Props = {
  isAddRestaurantModalVisible: boolean,
  hideAddRestaurantModal: Function
}

export const AddRestaurantModal = (props: Props) => (
  <Modal
    title="Add a new restaurant"
    visible={props.isAddRestaurantModalVisible}
    footer={null}
    onCancel={props.hideAddRestaurantModal}
  >
    <AddRestaurantFormContainer />
  </Modal>
);

const mapDispatchToProps = {
  hideAddRestaurantModal,
};

const mapStateToProps = state => state.ui;

export const AddRestaurantModalContainer = connect(mapStateToProps, mapDispatchToProps)(AddRestaurantModal);
