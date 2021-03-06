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
  }

  render() {
    return (
      <div>
        RATINGS & REVIEWS
        <Raitings reviewsData={this.props.reviewsData} />
        <Reviews reviewsData={this.props.reviewsData} />
      </div>
    );
  }
}

export default ReviewsComponent;
