/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Answer from './Answer';

function AnswersBox() {
  return (
    <div>
      <Answer />
      <Answer />
      <div>Load More Answers</div>
    </div>
  );
}

export default AnswersBox;
