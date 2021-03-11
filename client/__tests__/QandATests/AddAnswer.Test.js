/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddAnswer from '../../components/QandA/AddAnswer';

configure({ adapter: new Adapter() });

describe('Check for Component', () => {
  // const answer = {
  //   answer_id: 1092602,
  //   answerer_name: 'Jay.Pfeffer92',
  //   body: 'Consequuntur illum at.',
  //   date: '2021-01-06T00:00:00.000Z',
  //   helpfulness: 14,
  //   photos: [],
  // };

  const productName = 'Toy';
  const question = {
    question_body: 'Architecto quis culpa maiores veniam quia eos.',
    question_date: '2020-07-17T00:00:00.000Z',
    question_helpfulness: 12,
    question_id: 115426,
  };
  const toggleAddAnswer = () => true;

  test('Find AddAnswer component', () => {
    const wrapper = render(
      <div className="modal">
        <AddAnswer productName={productName} question={question} toggleAddAnswer={toggleAddAnswer} />
      </div>,
    );

    expect(wrapper.exists()).toBe(true);
  });
});
