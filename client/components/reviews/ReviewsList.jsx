/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import ReviewsListItem from './ReviewsListItem';

function ReviewsList(props) {
  let resultsArr = [];
  if (props.reviewsData.results !== undefined) {
    resultsArr = props.reviewsData.results;
  }
  return (
    <div>
      {resultsArr.map((review, key) => (
        <ReviewsListItem
          review={review}
          key={key}
          report={propTypes.report}
          product={props.reviewsData.product}
        />
      ))}
    </div>
  );
}

export default ReviewsList;
