/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import requests from '../../requests';

function AnswerButtons({ answerInfo }) {
  const [helpCount, setHelpCount] = useState(answerInfo.helpfulness);

  function incrementHelpful() {
    setHelpCount((prevHelpCount) => prevHelpCount + 1);

    const updateData = { answer_id: answerInfo.answer_id, helpful: helpCount + 1 };

    requests.updateAnswerHelpful(updateData, () => {
      console.log('Helpful Updated');
    });
  }

  function onReport() {
    const updateData = { answer_id: answerInfo.answer_id, reported: true };
    requests.reportAnswer(updateData, () => {
      console.log('Answer Reported');
    });
  }

  return (
    <div>
      <span>
        By
        {answerInfo.answerer_name}
        ,
        {answerInfo.date}
      </span>
      <span onClick={incrementHelpful}>
        Helpful? (
        {helpCount}
        )
      </span>
      <span onClick={onReport}>Report</span>
    </div>
  );
}

export default AnswerButtons;
