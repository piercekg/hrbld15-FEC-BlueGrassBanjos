import React from 'react';
import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.jsx';

configure({ adapter: new Adapter() });

describe('Initial Tests', () => {

  test('Each Related Product should contain a product name', () => {
    const wrapper = shallow(<App />).dive();
    expect(wrapper.find('p.relatedProductName')).toBeDefined();
  });

  test('Each Related Product should contain a price', () => {
    const wrapper = shallow(<App />).dive();
    expect(wrapper.find('p.relatedProductPrice')).toBeDefined();
  });
});