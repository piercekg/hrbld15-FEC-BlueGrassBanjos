/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionsList from '../../components/QandA/QuestionsList';

configure({ adapter: new Adapter() });

describe('Check for Components', () => {
  test('Find QandA component', () => {
    const wrapper = shallow(<QuestionsList />);

    expect(wrapper.exists()).toBe(true);
  });
});
