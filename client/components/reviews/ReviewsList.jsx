/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsListItem from './ReviewsListItem';

function ReviewsList({ reviewsData }) {
  let resultsArr = [];
  if (reviewsData.results !== undefined) {
    resultsArr = reviewsData.results;
  }
  return (
    <div>
      {resultsArr.map((review, key) => (
        <ReviewsListItem review={review} key={key} />
      ))}
    </div>
  );
}

export default ReviewsList;
