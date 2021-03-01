import React from 'react';
import FiveStars from './FiveStars';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        RATINGS & REVIEWS
        <FiveStars />
      </div>
    );
  }
}

export default Reviews;
