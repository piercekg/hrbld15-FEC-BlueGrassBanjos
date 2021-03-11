/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionBox from '../../components/QandA/QuestionBox';

configure({ adapter: new Adapter() });

describe('Check for Components', () => {
  const question = {
    question_helpfulness: 14,
    question_id: 12345,
  };

  test('Find QuestionBox component', () => {
    const wrapper = shallow(<QuestionBox question={question} />);

    expect(wrapper.exists()).toBe(true);
  });
});
