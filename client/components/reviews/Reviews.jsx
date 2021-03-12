/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsButtons from './ReviewsButtons';
import ReviewsList from './ReviewsList';
import SortBy from './SortBy';

function Reviews(props) {
  return (
    <div>
      <SortBy reviewsData={props.reviewsData} />
      <ReviewsList reviewsData={props.reviewsData} report={props.report} />
      <ReviewsButtons />
    </div>
  );
}

export default Reviews;
