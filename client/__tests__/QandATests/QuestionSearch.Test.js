/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionSearch from '../../components/QandA/QuestionSearch';

configure({ adapter: new Adapter() });

describe('Check for Components', () => {
  test('Find QandA component', () => {
    const wrapper = shallow(<QuestionSearch />);

    expect(wrapper.exists()).toBe(true);
  });
});
