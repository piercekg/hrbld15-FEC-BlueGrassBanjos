/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Overview from './productOverview/displayOverview';
import ReviewsComponent from './components/reviews/ReviewsComponent';

const Requests = require('./requests.js');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: 18201,
      reviewsData: {},
    };
  }

  componentDidMount() {
    Requests.getReviews(18201, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          reviewsData: data.data,
        });
      }
    });
  }

  render() {
    const prod = this.state;
    return (
      <Router>
        <div className="hello">Hello World!!!!</div>
        <Overview product={prod.product} />
        <ReviewsComponent reviewsData={this.state.reviewsData} />
      </Router>
    );
  }
}

export default App;
