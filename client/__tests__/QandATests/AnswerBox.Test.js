/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AnswerBox from '../../components/QandA/AnswerBox';

configure({ adapter: new Adapter() });

describe('Check for Components', () => {
  const answers = [{
    answer_id: 1092602, body: 'Consequuntur illum at.', date: '2021-01-06T00:00:00.000Z', answerer_name: 'Jay.Pfeffer92', helpfulness: 14, photos: [],
  }, {
    answer_id: 1092599, body: 'Expedita eius id autem aut incidunt assumenda non.', date: '2021-01-11T00:00:00.000Z', answerer_name: 'Lincoln.Gorczany79', helpfulness: 14, photos: [],
  }];

  test('Find QandA component', () => {
    const wrapper = shallow(<AnswerBox answers={answers} />);

    expect(wrapper.exists()).toBe(true);
  });
});
