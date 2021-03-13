/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import $ from 'jquery';

import requests from '../../requests';

function QuestionButtons({
  incrimentHelpful, helpful, productName, question, toggleAddAnswer,
}) {
  const onSubmit = () => {
    const formData = {};
    formData.question_id = question.question_id;
    formData.answer = $('#answer_text').val();
    formData.username = $('#answer_username').val();
    formData.email = $('#answer_email').val();

    $('#answer_text').text('');
    $('#answer_username').text('');
    $('#answer_email').text('');

    requests.postNewAnswer(formData, () => {
      console.log(formData);
    });
  };

  return (
    <div>
      <div>
        <span className="px-1 question-buttons" onClick={() => incrimentHelpful()}>
          Helpful? (
          {helpful}
          )
          &nbsp;
          |
        </span>
        <button type="button" className="btn question-buttons" onClick={toggleAddAnswer}>Add Answer</button>
      </div>
    </div>
  );
}

export default QuestionButtons;
