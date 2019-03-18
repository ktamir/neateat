// @flow

import React, { Component } from 'react';
import { Alert, Button, Checkbox, Form, Input, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { connect } from 'react-redux';
import { cuisines, ratingRange } from '../../consts';
import { addRestaurant } from '../../store/restaurantActions';

import './AddRestaurantForm.scss';
import { hideAddRestaurantModal } from '../../store/uiActions';
import type { NeatEatAddRestaurantAction, NeatEatError, NeatEatPlainAction, Restaurant } from '../../flowTypes';

type Props = {|
  form: FormComponentProps,
  addRestaurant: (Restaurant)=> NeatEatAddRestaurantAction,
  hideAddRestaurantModal: ()=> NeatEatPlainAction,
  addRestaurantError: NeatEatError,
  addRestaurantInProgress: boolean
|}

type Rule = {|
  type: string,
  required: boolean,
  message: string,
  whitespace: boolean
|};

export class AddRestaurantForm extends Component<Props> {
  validateDeliveryTime = (rule: Rule, value: number, callback: (?string) => void) => {
    if (value < 30 || value > 120) {
      callback('Value must be between 30 to 120');
    } else {
      callback();
    }
  };

  submitForm = (event: Event) => {
    const { form, addRestaurant } = this.props;

    event.preventDefault();

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        addRestaurant(values);
      }
    });
  };

  render() {
    const { addRestaurant, hideAddRestaurantModal, addRestaurantError, addRestaurantInProgress } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={addRestaurant}>
        <Form.Item label="Restaurant Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please fill restaurant name', whitespace: true }],
          })(
            <Input />,
          )}
        </Form.Item>

        <Form.Item label="Address">
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please fill address', whitespace: true }],
          })(
            <Input />,
          )}
        </Form.Item>

        <Form.Item label="Cuisine Type">
          {getFieldDecorator('cuisine', {
            rules: [{ required: true, message: 'Please choose cuisine type', whitespace: true }],
          })(
            <Select>
              {cuisines.map(cuisine =>
                <Select.Option value={cuisine.key} key={cuisine.key}>{cuisine.displayName}</Select.Option>,
              )}
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Rating">
          {getFieldDecorator('rating', {
            rules: [{ type: 'number', required: true, message: 'Please choose rating', whitespace: true }],
          })(
            <Select placeholder="1 to 3">
              {ratingRange.map(ratingOption =>
                <Select.Option value={ratingOption} key={ratingOption}>{ratingOption}</Select.Option>,
              )}
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Max Delivery Time (minutes)">
          {getFieldDecorator('maxDeliveryTime', {
            rules: [{ required: true, message: 'Please type a valid number.', whitespace: true },
              { validator: this.validateDeliveryTime }],
            validateTrigger: 'onBlur',
          })(
            <Input placeholder="30 to 120 minutes" type="number" />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('accepts_10_bis', {
            valuePropName: 'checked',
          })(
            <Checkbox>Accepts 10bis</Checkbox>,
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" className="submit-add-restaurant" htmlType="submit" loading={addRestaurantInProgress}
            onClick={this.submitForm}>Add</Button>

          <Button type="default" className="cancel-add-restaurant" onClick={hideAddRestaurantModal}>Cancel</Button>
        </Form.Item>

        {addRestaurantError && (
          <Alert
            className="restaurant-fetch-error"
            message={addRestaurantError.title}
            description={addRestaurantError.description}
            type="error"
          />
        )}
      </Form>
    );
  }
}

const WrappedAddRestaurantForm = Form.create({ name: 'addRestaurant' })(AddRestaurantForm);

const mapStateToProps = state => ({ ...state.ui, ...state.restaurants });

const mapDispatchToProps = {
  addRestaurant,
  hideAddRestaurantModal,
};

export const AddRestaurantFormContainer = connect(mapStateToProps, mapDispatchToProps)(WrappedAddRestaurantForm);
