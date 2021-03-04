/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Question from './Question';
import AnswerBox from './AnswerBox';

function QuestionBox({ question }) {
  return (
    <div>
      <Question question={question} />
      <AnswerBox />
    </div>
  );
}

export default QuestionBox;
