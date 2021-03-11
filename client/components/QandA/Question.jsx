/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import QuestionButtons from './QuestionButtons';

function Question({
  question, incrimentHelpful, helpful, toggleAddAnswer,
}) {
  return (
    <div className="row pb-3">
      <span className="col-1 Q">Q: </span>
      <div className="col question-body">{question.question_body}</div>
      <QuestionButtons className="col" incrimentHelpful={incrimentHelpful} helpful={helpful} toggleAddAnswer={toggleAddAnswer} question={question} />
    </div>
  );
}

export default Question;
