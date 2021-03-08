/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Raitings from './Raitings';
import Reviews from './Reviews';

class ReviewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.report = this.report.bind(this);
  }

  report() {
    console.log('report');
  }

  render() {
    return (
      <div>
        RATINGS & REVIEWS
        <Raitings reviewsData={this.props.reviewsData} />
        <Reviews reviewsData={this.props.reviewsData} report={this.report} />
      </div>
    );
  }
}

export default ReviewsComponent;
