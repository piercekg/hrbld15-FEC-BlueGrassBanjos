/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionButtons from '../../components/QandA/QuestionButtons';

configure({ adapter: new Adapter() });

describe('Check for Components', () => {
  test('Find QuestionButtons component', () => {
    const wrapper = shallow(<QuestionButtons />);

    expect(wrapper.exists()).toBe(true);
  });
});
