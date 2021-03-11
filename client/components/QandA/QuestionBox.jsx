/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Question from './Question';
import AnswerBox from './AnswerBox';
import requests from '../../requests';
import AddAnswer from './AddAnswer';

class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.productName,
      question: props.question,
      answers: [],
      visible: [],
      helpful: props.question.question_helpfulness,
      addAnswer: false,
    };

    // this.incrimentHelpful.bind(this);
  }

  componentDidMount() {
    const id = this.state.question.question_id;
    requests.getCurrentProductAnswers(id, (err, response) => {
      if (err) {
        console.log(`GetCurrentProductAnswers: ${err}`);
      } else {
        const firstTwo = response.data.results.slice(0, 2);
        this.setState({
          answers: response.data.results,
          visible: firstTwo,
        });
      }
    });
  }

  toggleAddAnswer() {
    this.setState({
      addAnswer: !this.state.addAnswer,
    });
  }

  addMoreAnswers() {
    const newLength = this.state.answers.length + 2;
    const newVisible = this.state.answers.slice(0, newLength);

    this.setState({
      visible: newVisible,
    });
  }

  incrimentHelpful() {
    this.setState({
      helpful: this.state.helpful + 1,
    }, () => {
      requests.updateQuestionHelpful({ question_id: this.state.question.question_id, helpful: this.state.helpful }, () => {
        console.log('Helpful Updated');
      });
    });
  }

  render() {
    return (
      <div className="b-2 question-container">
        {this.state.addAnswer ? <AddAnswer productName={this.state.productName} question={this.state.question} toggleAddAnswer={this.toggleAddAnswer.bind(this)} /> : null}

        <Question question={this.state.question} incrimentHelpful={this.incrimentHelpful.bind(this)} helpful={this.state.helpful} toggleAddAnswer={this.toggleAddAnswer.bind(this)} />

        <AnswerBox answers={this.state.visible} />
        <button type="button" className="btn btn-sm pb-4" onClick={this.addMoreAnswers.bind(this)}>Add More Answers</button>
      </div>
    );
  }
}

export default QuestionBox;

// function QuestionBox({ question }) {
//   return (
//     <div>
//       <Question question={question} />
//       <AnswerBox />
//     </div>
//   );
// }
