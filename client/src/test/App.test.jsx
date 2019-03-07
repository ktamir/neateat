import React from 'react';
import App from '../App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render loading spinner as soon as app is mounted', () => {
    let wrapper = mount(<App />);

    // Assert that loading spinner is rendered
    expect(wrapper.find('.ant-spin-text').exists()).toBe(true);
  });
});
