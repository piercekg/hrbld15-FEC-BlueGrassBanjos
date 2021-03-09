/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import $ from 'jquery';
import requests from '../../requests';

class AskQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.currentProductName,
      productId: this.props.currentProduct,
    };
  }

  onSubmit() {
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
  }

  render() {
    return (
      <form>
        <h3>{this.state.productName}</h3>
        <div>
          <textarea name="answer" id="question_text" placeholder="Your Question Here" required />
        </div>
        <div>
          <input type="text" name="userName" id="question_username" placeholder="Enter Username" required />
        </div>
        <div>
          <input type="email" name="email" id="question_email" placeholder="Enter Email" required />
        </div>
        <button type="button" onClick={this.onSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}

export default AskQuestion;
