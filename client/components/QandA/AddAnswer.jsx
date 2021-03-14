/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import requests from '../../requests';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.productName,
      questionBody: this.props.question.question_body,
      questionId: this.props.question.question_id,
    };
  }

  onSubmit() {
    const formData = {};
    formData.question_id = this.state.questionId;
    formData.answer = $('#answer_text').val();
    formData.username = $('#answer_username').val();
    formData.email = $('#answer_email').val();

    $('#answer_text').text('');
    $('#answer_username').text('');
    $('#answer_email').text('');

    requests.postNewAnswer(formData, () => {
      console.log(formData);
    });

    this.props.updateAnswers(formData);
    this.props.toggleAddAnswer();
  }

  onClose() {
    this.props.toggleAddAnswer();
  }

  render() {
    return ReactDom.createPortal(
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES} className="col-6">
          <form>
            <div className="container-fluid pop-up">
              <h3>{this.state.productName}</h3>
            </div>
            <h5 className="pt-1">{this.state.questionBody}</h5>
            <div>
              <textarea name="answer" className="col text-area" id="answer_text" placeholder="Your Answer Here" required />
            </div>
            <div>
              <input type="text" name="userName" className="col" id="answer_username" placeholder="Enter Username" required />
            </div>
            <div>
              <input type="email" name="email" className="col" id="answer_email" placeholder="Enter Email" required />
            </div>
            <div className="row">
              <button type="button" className="btn btn-secondary m-1 mt-2" onClick={this.onSubmit.bind(this)}>Submit</button>
              <button type="button" className="btn btn-secondary m-1 mt-2" onClick={this.onClose.bind(this)}>Close</button>
            </div>
          </form>
        </div>
      </div>,
      document.getElementById('modal'),
    );
  }
}

export default AddAnswer;
