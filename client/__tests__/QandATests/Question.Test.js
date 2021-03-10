/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Question from '../../components/QandA/Question';

configure({ adapter: new Adapter() });

describe('Check for Components', () => {
  const question = {
    question_body: 'test',
  };
  const incrimentHelpful = () => true;
  const helpful = 14;
  const toggleAddAnswer = () => false;

  test('Find Question component', () => {
    const wrapper = shallow(<Question incrimentHelpful={incrimentHelpful} helpful={helpful} toggleAddAnswer={toggleAddAnswer} question={question} />);

    expect(wrapper.exists()).toBe(true);
  });
});
