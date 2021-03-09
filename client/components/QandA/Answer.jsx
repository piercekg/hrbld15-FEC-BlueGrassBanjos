/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import AnswerButtons from './AnswerButtons';

function Answer({ answer }) {
  return (
    <div>
      <div>{answer.body}</div>
      <AnswerButtons answerInfo={answer} />
    </div>
  );
}

export default Answer;
