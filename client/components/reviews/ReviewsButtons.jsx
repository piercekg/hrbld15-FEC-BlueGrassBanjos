/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
import React from 'react';

function ReviewsButtons(props) {
  const displayMore = () => {
    alert('diplay more clicked');
  };

  return (
    <div>
      <button onClick={displayMore}>MORE REVIEWS</button>
      <button onClick={props.showModel}>ADD A REVIEW +</button>
    </div>
  );
}

export default ReviewsButtons;
