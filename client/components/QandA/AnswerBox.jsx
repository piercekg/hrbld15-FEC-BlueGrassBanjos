/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Answer from './Answer';

function AnswersBox({ answers }) {
  return (
    <div>
      {answers.map((answer) => (
        <Answer key={answer.answer_id} answer={answer} />
      ))}
    </div>
  );
}

export default AnswersBox;
