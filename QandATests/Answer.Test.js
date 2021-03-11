/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Answer from '../../components/QandA/Answer';

configure({ adapter: new Adapter() });

describe('Check for Component', () => {
  test('Find QandA component', () => {
    const wrapper = shallow(<Answer />);

    expect(wrapper.exists()).toBe(true);
  });
});
