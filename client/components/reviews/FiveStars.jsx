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
    <div>
      <SRC
        name="SRC1"
        value={starNumber}
        starCount={5}
        editing={false}
      />
    </div>
  );
}

export default FiveStars;
