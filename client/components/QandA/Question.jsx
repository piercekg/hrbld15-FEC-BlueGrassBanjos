/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import QuestionButtons from './QuestionButtons';

function Question({
  question, incrimentHelpful, helpful, toggleAddAnswer,
}) {
  return (
    <div>
      <div>{question.question_body}</div>
      <QuestionButtons incrimentHelpful={incrimentHelpful} helpful={helpful} toggleAddAnswer={toggleAddAnswer} />
    </div>
  );
}

export default Question;
