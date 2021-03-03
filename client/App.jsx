import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import ReviewsComponent from './components/reviews/ReviewsComponent';

const Requests = require('./requests.js');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    Requests.getReviews(18201, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="hello">Hello World!!!!</div>
        <ReviewsComponent />
      </Router>
    );
  }
}

export default App;
