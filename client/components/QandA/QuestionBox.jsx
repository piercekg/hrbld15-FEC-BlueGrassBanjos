/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Question from './Question';
import AnswerBox from './AnswerBox';

function QuestionBox() {
  return (
    <div>
      <Question />
      <AnswerBox />
    </div>
  );
}

export default QuestionBox;
