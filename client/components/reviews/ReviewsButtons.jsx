/* eslint-disable react/button-has-type */
import React from 'react';

function ReviewsButtons() {
  function displayMore() {
    alert('diplay more clicked');
  }
  return (
    <div>
      <button onClick={displayMore}>MORE REVIEWS</button>
      <button>ADD A REVIEW +</button>
    </div>
  );
}

export default ReviewsButtons;
