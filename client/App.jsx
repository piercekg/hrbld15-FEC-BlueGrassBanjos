/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */

import React from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Overview from './productOverview/displayOverview';
// import ReviewsComponent from './components/reviews/ReviewsComponent';
import QandA from './components/QandA/QandA';
import Requests from './requests';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 18201,
      reviewsData: {},
    };
  }

  componentDidMount() {
    // Requests.default.getReviews(18201, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     this.setState({
    //       reviewsData: data.data,
    //     });
    //   }
    // });
  }

  render() {
    const prod = this.state;
    return (
      <Router>
        <div className="hello">Hello World!!!!</div>
        {/* <Overview product={prod.product} />
        <RelatedProducts /> */}
        <QandA />
        {/* <ReviewsComponent reviewsData={this.state.reviewsData} /> */}
      </Router>
    );
  }
}

export default App;
