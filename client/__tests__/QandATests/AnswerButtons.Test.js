/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AnswerButtons from '../../components/QandA/AnswerButtons';

configure({ adapter: new Adapter() });

describe('Check for Components', () => {
  const answerInfo = {
    answer_id: 1092602,
    answerer_name: 'Jay.Pfeffer92',
    body: 'Consequuntur illum at.',
    date: '2021-01-06T00:00:00.000Z',
    helpfulness: 14,
    photos: [],
  };

  test('Find AnswerButtons component', () => {
    const wrapper = shallow(<AnswerButtons answerInfo={answerInfo} />);

    expect(wrapper.exists()).toBe(true);
  });
});
