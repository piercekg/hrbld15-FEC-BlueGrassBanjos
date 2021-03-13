/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import QuestionBox from './QuestionBox';

function QuestionsList({
  fullList, visible, currentProduct, currentProductName,
}) {
  return (
    <div className="mt-3 overflow-auto question-list" style={{ maxWidth: '54rem', maxHeight: '400px' }}>
      {visible.map((question) => (
        <QuestionBox key={question.question_id} question={question} currentProduct={currentProduct} currentProductName={currentProductName} />
      ))}
    </div>
  );
}

export default QuestionsList;
