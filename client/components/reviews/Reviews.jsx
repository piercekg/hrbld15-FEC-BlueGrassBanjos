import React from 'react';
import ReviewsButtons from './ReviewsButtons';
import ReviewsList from './ReviewsList';
import SortBy from './SortBy';

function Reviews() {
  return (
    <div>
      Reviews
      <SortBy />
      <ReviewsList />
      <ReviewsButtons />
    </div>
  );
}

export default Reviews;
