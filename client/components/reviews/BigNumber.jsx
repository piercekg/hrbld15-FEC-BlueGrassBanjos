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
    <div className="bigNumDiv">
      <div className="bigNumber">{bigNumber}</div>
      <FiveStars bigNumber={bigNumber} className="bigNumStars" />
    </div>
  );
}

export default BigNumber;
