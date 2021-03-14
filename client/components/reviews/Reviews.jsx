/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsButtons from './ReviewsButtons';
import ReviewsList from './ReviewsList';
import SortBy from './SortBy';

function Reviews(props) {
  return (
    <div>
      <SortBy reviewsData={props.reviewsData} getRelevantReviews={props.getRelevantReviews} getMostRecentReviews={props.getMostRecentReviews} />
      <ReviewsList reviewsData={props.reviewsData} report={props.report} />
      <ReviewsButtons showModel={props.showModel} />
    </div>
  );
}

export default Reviews;
