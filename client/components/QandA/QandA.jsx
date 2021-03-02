/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */

import React from 'react';
import QuestionSearch from './QuestionSearch';
import QuestionsList from './QuestionsList';
import ButtonBox from './ButtonBox';

import requests from '../../requests';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 18201,
    };
  }

  componentDidMount() {
    requests.getCurrentProductQuestions(this.state.currentProduct, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.data);
      }
    });
  }

  render() {
    return (
      <div className="QandA">
        <div>Questions and Answers</div>
        <QuestionSearch />
        <QuestionsList />
        <ButtonBox />
      </div>
    );
  }
}

export default QandA;
