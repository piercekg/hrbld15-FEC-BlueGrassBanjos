/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */

import React from 'react';
import QuestionSearch from './QuestionSearch';
import QuestionsList from './QuestionsList';
import ButtonBox from './ButtonBox';

import requests from '../../requests';
import helpers from './helpers';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 18201,
      productQuestions: [],
      questionAnswers: [],
      visible: [],
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

    // requests.getCurrentProductAnswers();
  }

  render() {
    return (
      <div className="QandA">
        <div>Questions and Answers</div>
        <QuestionSearch />
        <QuestionsList fullList={this.state.productQuestions} visible={this.state.visible} />
        <ButtonBox />
      </div>
    );
  }
}

export default QandA;
