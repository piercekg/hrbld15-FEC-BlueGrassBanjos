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
      currentProduct: 18201,
      currentProductName: 'Toy',
      productQuestions: [],
      questionAnswers: [],
      visible: [],
      addQuestion: false,
    };
  }

  componentDidMount() {
    requests.getCurrentProductQuestions(this.state.currentProduct, (err, response) => {
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

  toggleAskQuestion() {
    this.setState({
      addQuestion: !this.state.addQuestion,
    });
  }

  render() {
    return (
      <div className="QandA">
        <div>Questions and Answers</div>
        <QuestionSearch />
        {this.state.addQuestion ? <AskQuestion currentProduct={this.state.currentProduct} currentProductName={this.state.currentProductName} /> : null}
        <QuestionsList fullList={this.state.productQuestions} visible={this.state.visible} productName={this.state.currentProductName} />
        <ButtonBox toggleAskQuestion={this.toggleAskQuestion.bind(this)} />
      </div>
    );
  }
}

export default QandA;
