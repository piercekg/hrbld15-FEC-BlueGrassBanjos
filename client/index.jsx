/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Reviews from './components/reviews/Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsData: [],
    };
  }

  render() {
    return (
      <Router>
        <div>Hello World!!!!</div>
        <Reviews reviewsData={this.state.reviewsData} />
      </Router>
    );
  }
}

// ReactDOM.render(< App/>, document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
