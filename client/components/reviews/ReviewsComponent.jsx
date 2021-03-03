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
        <Raitings />
        <Reviews />
      </div>
    );
  }
}

export default ReviewsComponent;
