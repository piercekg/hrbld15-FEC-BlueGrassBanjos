/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function SortBy(props) {
  function getRelevantReviews() {
    props.getRelevantReviews();
  }

  function getMostRecentReviews() {
    props.getMostRecentReviews();
  }

  function getSelected() {
    const selected = document.getElementById('sortBy').value;
    if (selected === 'most recent') {
      getMostRecentReviews();
    } else if (selected === 'relevance') {
      getRelevantReviews();
    }
  }

  return (
    <div>
      { `${props.reviewsData.count} reviews, sorted by `}
      <select id="sortBy" onChange={getSelected}>
        <option>relevance</option>
        <option>most recent</option>
      </select>
    </div>
  );
}

export default SortBy;
