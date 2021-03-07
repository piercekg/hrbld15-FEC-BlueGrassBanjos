/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

function AnswerButtons({ answerInfo }) {
  const [helpful, setHelpful] = useState(answerInfo.helpfulness);

  function incrementHelpful() {
    setHelpful((prevHelpful) => prevHelpful + 1);
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
        {helpful}
        )
      </span>
      <span>Report</span>
    </div>
  );
}

export default AnswerButtons;
