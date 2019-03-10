// @flow

import React, { Component } from 'react';
import { Modal } from 'antd';
import { WrappedAddRestaurantForm } from './AddRestaurantForm';

type Props = {
  onModalClose: Function
}

type State = {
  visible: boolean
}

export class AddRestaurantModal extends Component<Props, State> {
  render() {
    return (
      <Modal
        title="Add a new restaurant"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <WrappedAddRestaurantForm />
      </Modal>
    );
  }
}
