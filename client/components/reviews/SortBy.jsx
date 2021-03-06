/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function SortBy(props) {
  return (
    <div>
      { `${props.reviewsData.count} reviews, sorted by `}
      <select>
        <option>relevance</option>
      </select>
    </div>
  );
}

export default SortBy;
