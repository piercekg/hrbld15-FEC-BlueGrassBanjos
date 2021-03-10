/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import QuestionBox from './QuestionBox';

function QuestionsList({ fullList, visible, productName }) {
  return (
    <div className="mt-3">
      {visible.map((question) => (
        <QuestionBox key={question.question_id} question={question} productName={productName} />
      ))}
    </div>
  );
}

export default QuestionsList;
