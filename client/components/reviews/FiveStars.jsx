/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import SRC from 'react-star-rating-component';

function FiveStars(props) {
  let starNumber = 0;
  if (props.bigNumber !== 0 || props.bigNumber !== undefined) {
    starNumber = props.bigNumber;
  }
  return (
    <div className="bigNumDiv">
      <SRC
        name="SRC1"
        value={starNumber}
        starCount={5}
        editing={false}
        starColor={'black'} /* color of selected icons, default `#ffb400` */
        emptyStarColor={'lightgrey'}
      />
    </div>
  );
}

export default FiveStars;
