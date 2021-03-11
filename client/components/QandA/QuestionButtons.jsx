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

/* <div className="modal fade" id="add-answer-modal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{productName}</h2>
            </div>
            <div className="modal-body">
              <h4>{questionBody}</h4>
              <form>
                <div>
                  <textarea name="answer" id="answer_text" className="col" placeholder="Your Answer Here" required />
                </div>
                <div>
                  <input type="text" name="userName" className="col" id="answer_username" placeholder="Enter Username" required />
                </div>
                <div>
                  <input type="email" name="email" id="answer_email" className="col" placeholder="Enter Email" required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="row">
                <button type="button" className="btn btn-secondary m-1" onClick={onSubmit} data-dismiss="modal">Submit</button>
                <button type="button" className="btn btn-secondary m-1" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div> */
