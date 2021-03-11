/* eslint-disable operator-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import FiveStars from './FiveStars';

function BigNumber({ reviewsData }) {
  let bigNumber = 0.0;
  if (reviewsData.results !== undefined) {
    for (let i = 0; i < reviewsData.results.length; i++) {
      bigNumber += reviewsData.results[i].rating;
    }
    bigNumber = (bigNumber / reviewsData.results.length);
  }
  return (
    <div>
      <h1>{bigNumber}</h1>
      <FiveStars bigNumber={bigNumber} />
    </div>
  );
}

export default BigNumber;
