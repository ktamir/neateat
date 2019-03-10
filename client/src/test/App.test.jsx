import React from 'react';
import App from '../App';
import { mount } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { mockError, mockRestaurants } from './testConsts';
import { API_URL } from '../consts';

const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

describe('App', () => {
  const httpMock = new MockAdapter(axios);

  it('should render loading spinner as soon as app is mounted', () => {
    let wrapper = mount(<App />);

    // Assert that loading spinner is rendered
    expect(wrapper.find('.ant-spin-text')).toHaveLength(1);
  });

  it('fetches restaurants successfully', async () => {
    httpMock.onGet(`${API_URL}/restaurants`).reply(200, mockRestaurants);

    let wrapper = mount(<App />);

    await flushAllPromises();
    wrapper.update();

    expect(wrapper.find('div.ant-card.restaurant-card.ant-card-bordered')).toHaveLength(mockRestaurants.length);
  });

  it('handles fetch restaurants error', async () => {
    httpMock.onGet(`${API_URL}/restaurants`).reply(500, mockError);

    let wrapper = mount(<App />);

    await flushAllPromises();
    wrapper.update();

    expect(wrapper.find('div.ant-alert')).toHaveLength(1);
    expect(wrapper.find('span.ant-alert-message').text()).toEqual(mockError.error);
    expect(wrapper.find('span.ant-alert-description').text()).toEqual(mockError.exception);
  });
});
