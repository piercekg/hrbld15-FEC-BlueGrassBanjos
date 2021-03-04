/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import QuestionButtons from './QuestionButtons';

function Question({ question }) {
  return (
    <div>
      <div>{question.question_body}</div>
      <QuestionButtons />
    </div>
  );
}

export default Question;
