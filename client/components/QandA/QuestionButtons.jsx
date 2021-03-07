/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

function QuestionButtons({ incrimentHelpful, helpful, toggleAddAnswer }) {
  return (
    <div>
      <span onClick={() => incrimentHelpful()}>
        Helpful? (
        {helpful}
        {' '}
        )
      </span>
      <span onClick={toggleAddAnswer}>Add Answer</span>
    </div>
  );
}

export default QuestionButtons;
