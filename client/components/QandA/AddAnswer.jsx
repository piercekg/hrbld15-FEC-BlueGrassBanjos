/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import $ from 'jquery';

import requests from '../../requests';

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

    $('#answer_question_id').text('');
    $('#answer_text').text('');
    $('#answer_username').text('');
    $('#answer_email').text('');

    requests.postNewAnswer(formData, () => {
      console.log(formData);
    });

    this.props.toggleAddAnswer();
  }

  render() {
    return (
      <form>
        <h3>
          {this.state.productName}
        </h3>
        <div>{this.state.questionBody}</div>
        <div>
          <textarea name="answer" id="answer_text" placeholder="Your Answer Here" required />
        </div>
        <div>
          <input type="text" name="userName" id="answer_username" placeholder="Enter Username" required />
        </div>
        <div>
          <input type="email" name="email" id="answer_email" placeholder="Enter Email" required />
        </div>
        <button type="button" onClick={this.onSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}

export default AddAnswer;

// function Answer() {
//   const lard = 'biggum';

//   return (
//     <form action="http://localhost:3000/qa/questions/:question_id/answers">
//       <input type="hidden" id="addAnswerQuestionId" name="questionId" value="" />
//       <div>
//         <textarea name="answer" placeholder="Your Answer Here" required />
//       </div>
//       <div>
//         <input type="text" name="userName" placeholder="Enter Username" required />
//       </div>
//       <div>
//         <input type="email" name="email" placeholder="Enter Email" required />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
