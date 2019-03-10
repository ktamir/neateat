// @flow

import React, { Component } from 'react';
import { Checkbox, Form, Input, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { cuisines, ratingRange } from '../../consts';

type Props = {
  form: FormComponentProps
}

type State = {}

export class AddRestaurantForm extends Component<Props, State> {

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleOk}>
        <Form.Item label="Restaurant Name">
          {getFieldDecorator('restaurantName', {
            rules: [{ required: true, message: 'Please fill restaurant name', whitespace: true }],
          })(
            <Input />,
          )}
        </Form.Item>

        <Form.Item label="Cuisine Type">
          {getFieldDecorator('cuisineType', {
            rules: [{ required: true, message: 'Please choose cuisine type', whitespace: true }],
          })(
            <Select>
              {cuisines.map(cuisine =>
                <Select.Option value={cuisine.key} key={cuisine.key}>{cuisine.displayName}</Select.Option>
              )}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Rating">
          {getFieldDecorator('rating', {
            rules: [{ required: true, message: 'Please choose rating', whitespace: true }],
          })(
            <Select placeholder="1 to 3">
              {ratingRange.map(ratingOption =>
                <Select.Option value={ratingOption} key={ratingOption}>{ratingOption}</Select.Option>
              )}
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Speed">
          {getFieldDecorator('speed', {
            rules: [{ required: true, message: 'Please type speed', whitespace: true }],
          })(
            <Input placeholder="30 to 120 minutes" />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('accepts10Bis', {
            valuePropName: 'checked',
          })(
            <Checkbox>Accepts 10bis</Checkbox>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export const WrappedAddRestaurantForm = Form.create({ name: 'addRestaurant' })(AddRestaurantForm);
