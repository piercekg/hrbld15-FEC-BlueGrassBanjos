/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import $ from 'jquery';
import requests from '../../requests';

function AnswerButtons({ answerInfo }) {
  const [helpCount, setHelpCount] = useState(answerInfo.helpfulness);

  let markedAsHelpful = false;
  function incrementHelpful() {
    if (markedAsHelpful === false) {
      setHelpCount((prevHelpCount) => prevHelpCount + 1);
      markedAsHelpful = true;
      const updateData = { answer_id: answerInfo.answer_id, helpful: helpCount + 1 };

      requests.updateAnswerHelpful(updateData, () => {
        console.log('Helpful Updated');
      });
    }
  }

  function onReport(event) {
    const updateData = { answer_id: answerInfo.answer_id, reported: true };
    requests.reportAnswer(updateData, () => {
      console.log('Answer Reported');
    });
    event.target.textContent = 'Reported';
    event.target.className += (' reported');
  }

  return (
    <div className="row">
      <span className="col by-info">
        By
        {' '}
        {answerInfo.answerer_name}
        {' '}
        {answerInfo.date.slice(0, 10)}
      </span>
      <span className="col answer-helpful" onClick={incrementHelpful}>
        Helpful? (
        {helpCount}
        )
        &nbsp;&nbsp;
        |
      </span>
      <span
        className="col answer-report"
        onClick={(event) => {
          onReport(event);
        }}
      >
        Report
      </span>
    </div>
  );
}

export default AnswerButtons;
