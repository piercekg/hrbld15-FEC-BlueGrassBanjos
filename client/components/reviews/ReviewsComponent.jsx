/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Ratings from './Ratings';
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
      <div className="rnrComponent">
        <div className="rnrTitle">RATINGS & REVIEWS</div>
        <div className="inline">
          <div className="ratingsDiv">
            <Ratings reviewsData={this.props.reviewsData} />
          </div>
          <div className="reviewsDiv">
            <Reviews reviewsData={this.props.reviewsData} report={this.report} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsComponent;
