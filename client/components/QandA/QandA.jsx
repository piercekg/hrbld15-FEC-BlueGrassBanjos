/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */

import React from 'react';
import QuestionSearch from './QuestionSearch';
import QuestionsList from './QuestionsList';
import ButtonBox from './ButtonBox';
import AskQuestion from './AskQuestion';

import requests from '../../requests';
import helpers from './helpers';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      currentProduct: this.props.productId,
      productQuestions: [],
      visible: [],
      addQuestion: false,
    };
  }

  componentDidMount() {
    this.getQuestions();
    this.getAnswers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.setState({
        currentProduct: this.props.productId,
      }, () => {
        this.getQuestions();
        this.getAnswers();
      });
    }
  }

  getQuestions() {
    requests.getCurrentProductQuestions(this.props.productId, (err, response) => {
      if (err) {
        console.log(`GetCurrentProductQuestions: ${err}`);
      } else {
        helpers.sortQuestions(response.data.results, (questions) => {
          const firstTwo = questions.slice(0, 2);
          this.setState({
            productQuestions: questions,
            visible: firstTwo,
          });
        });
      }
    });
  }

  getAnswers() {
    requests.getProductInfo(this.state.currentProduct, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          productName: data.data.name,
        });
      }
    });
  }

  toggleAskQuestion() {
    this.setState({
      addQuestion: !this.state.addQuestion,
    });
  }

  addMoreQuestions() {
    const newLength = this.state.visible.length + 2;
    const newQuestions = this.state.productQuestions.slice(0, newLength);

    this.setState({
      visible: newQuestions,
    });
  }

  searchQuestions(text) {
    const newQuestionsList = [];
    const questions = this.state.productQuestions;
    const textArr = text.split(' ');

    questions.forEach((question) => {
      const questionText = question.question_body;
      textArr.forEach((word) => {
        if (questionText.includes(word) && newQuestionsList.indexOf(questionText) === -1) {
          newQuestionsList.push(question);
        }
      });
    });

    helpers.sortQuestions(newQuestionsList, (sortedList) => {
      const newVisible = sortedList.slice(0, 2);
      this.setState({
        fullList: sortedList,
        visible: newVisible,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="pt-2">Questions and Answers</h3>
        <QuestionSearch searchQuestions={this.searchQuestions.bind(this)} />
        {this.state.addQuestion ? <AskQuestion currentProduct={this.state.currentProduct} currentProductName={this.state.productName} toggleAskQuestion={this.toggleAskQuestion.bind(this)} /> : null}
        <div id="modal" />
        <QuestionsList fullList={this.state.productQuestions} visible={this.state.visible} currentProduct={this.state.currentProduct} currentProductName={this.state.productName} />
        <ButtonBox toggleAskQuestion={this.toggleAskQuestion.bind(this)} addMoreQuestions={this.addMoreQuestions.bind(this)} />
      </div>
    );
  }
}

export default QandA;
