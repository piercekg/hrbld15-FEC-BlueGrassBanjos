/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import FiveStars from './FiveStars';

function ReviewsListItem(props) {
  const title = props.review.body.split('.')[0];
  const date = new Date(props.review.date).toDateString();
  const bigNumber = props.review.rating;

  function reportClickHandler() {
    alert('This review has been reported.');
  }

  return (
    <div>
      <br />
      <FiveStars bigNumber={bigNumber} />
      {`${props.review.reviewer_name}, ${date}`}
      <h4>{title}</h4>
      <div>{props.review.body}</div>
      <div>
        {'Helpfull? '}
        <button type="submit">yes</button>
        <sup>{`(${props.review.helpfulness})`}</sup>
        {' | '}
        <button type="submit" onClick={reportClickHandler}>report</button>
      </div>
    </div>
  );
}

export default ReviewsListItem;
