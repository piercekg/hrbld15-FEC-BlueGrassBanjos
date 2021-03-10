/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import AnswerButtons from './AnswerButtons';

function Answer({ answer }) {
  return (
    <div>
      <div className="row">
        <span className="col-1 A">A:</span>
        <div className="col">{answer.body}</div>
      </div>
      <div className="row">
        <span className="col-2" />
        <AnswerButtons className="col-10" answerInfo={answer} />
      </div>
    </div>
  );
}

export default Answer;
