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
  const answer = {
    answer_id: 1092602,
    answerer_name: 'Jay.Pfeffer92',
    body: 'Consequuntur illum at.',
    date: '2021-01-06T00:00:00.000Z',
    helpfulness: 14,
    photos: [],
  };

  test('Find Answer component', () => {
    const wrapper = shallow(<Answer answer={answer} />);

    expect(wrapper.exists()).toBe(true);
  });
});
