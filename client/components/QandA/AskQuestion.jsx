/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import reactDom from 'react-dom';
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

class AskQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.currentProductName,
      productId: this.props.currentProduct,
    };
  }

  onSubmit() {
    console.log('works');
    const formData = {};
    formData.body = $('#question_text').val();
    formData.name = $('#question_username').val();
    formData.email = $('#question_email').val();
    formData.product_id = this.state.productId;

    $('#question_text').text('');
    $('#question_username').text('');
    $('#question_email').text('');

    requests.postNewQuestion(formData, () => {
      console.log(formData);
    });
    this.props.toggleAskQuestion();
  }

  onClose() {
    this.props.toggleAskQuestion();
  }

  render() {
    return reactDom.createPortal(
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES} className="col-6">
          <form>
            <div className="container-fluid pop-up">
              <h3>{this.state.productName}</h3>
            </div>
            <div>
              <textarea name="answer" id="question_text" className="col text-area" placeholder="Your Question Here" required />
            </div>
            <div>
              <input type="text" name="userName" className=" col" id="question_username" placeholder="Enter Username" required />
            </div>
            <div>
              <input type="email" name="email" id="question_email" className="col" placeholder="Enter Email" required />
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

export default AskQuestion;
