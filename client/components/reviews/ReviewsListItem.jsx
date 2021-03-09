/* eslint-disable react/prop-types */
import React from 'react';
import FiveStars from './FiveStars';

function ReviewsListItem({ review }) {
  const title = review.body.split('.')[0];
  const date = new Date(review.date).toDateString();
  return (
    <div>
      <br />
      <FiveStars />
      <div>{`${review.reviewer_name} ${date}`}</div>
      <h4>{title}</h4>
      <div>{review.body}</div>
      <div>Helpful? yes | report</div>
    </div>
  );
}

export default ReviewsListItem;
