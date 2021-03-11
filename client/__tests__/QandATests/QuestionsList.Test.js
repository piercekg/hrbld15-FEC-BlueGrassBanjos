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
  const fullList = [{
    question_id: 115426,
    question_body: 'Architecto quis culpa maiores veniam quia eos.',
    question_date: '2020-07-17T00:00:00.000Z',
    asker_name: 'Douglas.Armstrong0',
    question_helpfulness: 12,
    reported: false,
    answers: {
      1092597: {
        id: 1092597, body: 'Et commodi ratione aut perferendis quasi.', date: '2020-08-18T00:00:00.000Z', answerer_name: 'Terrence.Reynolds31', helpfulness: 2, photos: ['https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'],
      },
      1092598: {
        id: 1092598, body: 'Id omnis qui quo hic et culpa consequatur officia.', date: '2021-02-10T00:00:00.000Z', answerer_name: 'Grace59', helpfulness: 11, photos: [],
      },
      1092599: {
        id: 1092599, body: 'Expedita eius id autem aut incidunt assumenda non.', date: '2021-01-11T00:00:00.000Z', answerer_name: 'Lincoln.Gorczany79', helpfulness: 14, photos: [],
      },
      1092600: {
        id: 1092600, body: 'Eum ipsa expedita natus vitae cupiditate.', date: '2020-08-23T00:00:00.000Z', answerer_name: 'Carlo88', helpfulness: 13, photos: [],
      },
      1092601: {
        id: 1092601, body: 'Quae saepe qui earum repellendus.', date: '2020-05-16T00:00:00.000Z', answerer_name: 'Kali.Green', helpfulness: 0, photos: ['https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'],
      },
      1092602: {
        id: 1092602, body: 'Consequuntur illum at.', date: '2021-01-06T00:00:00.000Z', answerer_name: 'Jay.Pfeffer92', helpfulness: 14, photos: [],
      },
      1092603: {
        id: 1092603, body: 'Tempore qui est aut aut quia.', date: '2020-08-07T00:00:00.000Z', answerer_name: 'Devyn40', helpfulness: 12, photos: [],
      },
      1092604: {
        id: 1092604, body: 'Aut culpa neque incidunt id.', date: '2020-11-10T00:00:00.000Z', answerer_name: 'Estel62', helpfulness: 5, photos: [],
      },
      1092610: {
        id: 1092610, body: 'Et voluptate qui recusandae.', date: '2020-05-26T00:00:00.000Z', answerer_name: 'Emmanuelle_Hills41', helpfulness: 7, photos: ['https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
      },
      1092611: {
        id: 1092611, body: 'Eos possimus natus explicabo laborum minus ullam maxime minima culpa.', date: '2020-10-24T00:00:00.000Z', answerer_name: 'Kirsten88', helpfulness: 5, photos: ['https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80', 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'],
      },
      1092612: {
        id: 1092612, body: 'Voluptatem vel sed nulla exercitationem officia.', date: '2020-11-13T00:00:00.000Z', answerer_name: 'Syble.Bosco', helpfulness: 3, photos: [],
      },
      1443821: {
        id: 1443821, body: "I don't understand", date: '2021-03-09T00:00:00.000Z', answerer_name: 'dee', helpfulness: 0, photos: [],
      },
      1443863: {
        id: 1443863, body: "I don't know", date: '2021-03-10T00:00:00.000Z', answerer_name: 'batman', helpfulness: 0, photos: [],
      },
      1443864: {
        id: 1443864, body: 'Hello?', date: '2021-03-10T00:00:00.000Z', answerer_name: 'Test', helpfulness: 0, photos: [],
      },
      1443865: {
        id: 1443865, body: 'Hello?', date: '2021-03-10T00:00:00.000Z', answerer_name: 'test', helpfulness: 0, photos: [],
      },
      1443866: {
        id: 1443866, body: 'Hello?', date: '2021-03-10T00:00:00.000Z', answerer_name: 'test', helpfulness: 0, photos: [],
      },
      1443867: {
        id: 1443867, body: 'no', date: '2021-03-10T00:00:00.000Z', answerer_name: 'Test', helpfulness: 0, photos: [],
      },
    },
  }, {
    question_id: 153028,
    question_body: 'Does it come in black?',
    question_date: '2021-03-08T00:00:00.000Z',
    asker_name: 'Batman',
    question_helpfulness: 6,
    reported: false,
    answers: {
      1443822: {
        id: 1443822, body: 'Yes', date: '2021-03-09T00:00:00.000Z', answerer_name: 'Test', helpfulness: 1, photos: [],
      },
    },
  }, {
    question_id: 153097, question_body: 'Hello?', question_date: '2021-03-09T00:00:00.000Z', asker_name: 'mr dude', question_helpfulness: 0, reported: false, answers: {},
  }, {
    question_id: 152825, question_body: 'Can I wash them in hot water?', question_date: '2021-03-06T00:00:00.000Z', asker_name: 'bobjohnson88', question_helpfulness: 0, reported: false, answers: {},
  }];

  const visible = [{
    question_id: 115426,
    question_body: 'Architecto quis culpa maiores veniam quia eos.',
    question_date: '2020-07-17T00:00:00.000Z',
    asker_name: 'Douglas.Armstrong0',
    question_helpfulness: 12,
    reported: false,
    answers: {
      1092597: {
        id: 1092597, body: 'Et commodi ratione aut perferendis quasi.', date: '2020-08-18T00:00:00.000Z', answerer_name: 'Terrence.Reynolds31', helpfulness: 2, photos: ['https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'],
      },
      1092598: {
        id: 1092598, body: 'Id omnis qui quo hic et culpa consequatur officia.', date: '2021-02-10T00:00:00.000Z', answerer_name: 'Grace59', helpfulness: 11, photos: [],
      },
      1092599: {
        id: 1092599, body: 'Expedita eius id autem aut incidunt assumenda non.', date: '2021-01-11T00:00:00.000Z', answerer_name: 'Lincoln.Gorczany79', helpfulness: 14, photos: [],
      },
      1092600: {
        id: 1092600, body: 'Eum ipsa expedita natus vitae cupiditate.', date: '2020-08-23T00:00:00.000Z', answerer_name: 'Carlo88', helpfulness: 13, photos: [],
      },
      1092601: {
        id: 1092601, body: 'Quae saepe qui earum repellendus.', date: '2020-05-16T00:00:00.000Z', answerer_name: 'Kali.Green', helpfulness: 0, photos: ['https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'],
      },
      1092602: {
        id: 1092602, body: 'Consequuntur illum at.', date: '2021-01-06T00:00:00.000Z', answerer_name: 'Jay.Pfeffer92', helpfulness: 14, photos: [],
      },
      1092603: {
        id: 1092603, body: 'Tempore qui est aut aut quia.', date: '2020-08-07T00:00:00.000Z', answerer_name: 'Devyn40', helpfulness: 12, photos: [],
      },
      1092604: {
        id: 1092604, body: 'Aut culpa neque incidunt id.', date: '2020-11-10T00:00:00.000Z', answerer_name: 'Estel62', helpfulness: 5, photos: [],
      },
      1092610: {
        id: 1092610, body: 'Et voluptate qui recusandae.', date: '2020-05-26T00:00:00.000Z', answerer_name: 'Emmanuelle_Hills41', helpfulness: 7, photos: ['https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
      },
      1092611: {
        id: 1092611, body: 'Eos possimus natus explicabo laborum minus ullam maxime minima culpa.', date: '2020-10-24T00:00:00.000Z', answerer_name: 'Kirsten88', helpfulness: 5, photos: ['https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80', 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'],
      },
      1092612: {
        id: 1092612, body: 'Voluptatem vel sed nulla exercitationem officia.', date: '2020-11-13T00:00:00.000Z', answerer_name: 'Syble.Bosco', helpfulness: 3, photos: [],
      },
      1443821: {
        id: 1443821, body: "I don't understand", date: '2021-03-09T00:00:00.000Z', answerer_name: 'dee', helpfulness: 0, photos: [],
      },
      1443863: {
        id: 1443863, body: "I don't know", date: '2021-03-10T00:00:00.000Z', answerer_name: 'batman', helpfulness: 0, photos: [],
      },
      1443864: {
        id: 1443864, body: 'Hello?', date: '2021-03-10T00:00:00.000Z', answerer_name: 'Test', helpfulness: 0, photos: [],
      },
      1443865: {
        id: 1443865, body: 'Hello?', date: '2021-03-10T00:00:00.000Z', answerer_name: 'test', helpfulness: 0, photos: [],
      },
      1443866: {
        id: 1443866, body: 'Hello?', date: '2021-03-10T00:00:00.000Z', answerer_name: 'test', helpfulness: 0, photos: [],
      },
      1443867: {
        id: 1443867, body: 'no', date: '2021-03-10T00:00:00.000Z', answerer_name: 'Test', helpfulness: 0, photos: [],
      },
    },
  }, {
    question_id: 153028,
    question_body: 'Does it come in black?',
    question_date: '2021-03-08T00:00:00.000Z',
    asker_name: 'Batman',
    question_helpfulness: 6,
    reported: false,
    answers: {
      1443822: {
        id: 1443822, body: 'Yes', date: '2021-03-09T00:00:00.000Z', answerer_name: 'Test', helpfulness: 1, photos: [],
      },
    },
  }];

  const productName = 'toy';

  test('Find QandA component', () => {
    const wrapper = shallow(<QuestionsList fullList={fullList} visible={visible} />);

    expect(wrapper.exists()).toBe(true);
  });
});
