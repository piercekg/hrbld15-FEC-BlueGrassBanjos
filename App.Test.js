/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

configure({ adapter: new Adapter() });

describe('Initial Tests', () => {
  test('Find "Hello World"', () => {
    const wrapper = shallow(<App />).dive();

    expect(wrapper.find('div.hello').text()).toContain('Hello World!!!!');
  });
});
