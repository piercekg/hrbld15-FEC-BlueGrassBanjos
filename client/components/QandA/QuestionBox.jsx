/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-did-update-set-state */
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
      currentProduct: this.props.currentProduct,
      productName: this.props.currentProductName,
      question: props.question,
      answers: [],
      visible: [],
      helpful: props.question.question_helpfulness,
      addAnswer: false,
      moreAnswers: true,
    };

    this.updateAnswers = this.updateAnswers.bind(this);
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
    const newLength = this.state.visible.length + 2;
    const newVisible = this.state.answers.slice(0, newLength);

    if (newVisible.length === this.state.answers.length) {
      this.setState({
        visible: newVisible,
        moreAnswers: false,
      });
    } else {
      this.setState({
        visible: newVisible,
      });
    }
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

  updateAnswers(answer) {
    const answerObj = {};
    answerObj.answerer_name = answer.username;
    answerObj.body = answer.answer;
    answerObj.date = new Date();
    answerObj.helpfulness = 0;

    this.setState({
      answers: [...this.state.answers, answerObj],
    });
  }

  render() {
    return (
      <div className="pb-2 pt-2 question-container">
        {this.state.addAnswer ? <AddAnswer productName={this.props.currentProductName} question={this.state.question} toggleAddAnswer={this.toggleAddAnswer.bind(this)} updateAnswers={this.updateAnswers} /> : null}

        <Question question={this.state.question} incrimentHelpful={this.incrimentHelpful.bind(this)} helpful={this.state.helpful} toggleAddAnswer={this.toggleAddAnswer.bind(this)} />

        <AnswerBox answers={this.state.visible} />
        {this.state.moreAnswers ? <button type="button" className="btn btn-sm pb-4" onClick={this.addMoreAnswers.bind(this)}>Add More Answers</button> : null}
      </div>
    );
  }
}

export default QuestionBox;
