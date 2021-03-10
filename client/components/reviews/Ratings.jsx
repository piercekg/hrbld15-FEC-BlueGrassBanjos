/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import BigNumber from './BigNumber';
import Recomendation from './Recomendation';
import StarList from './StarList';
import Sliders from './Sliders';

function Ratings(props) {
  return (
    <div className="ratings">
      <BigNumber reviewsData={props.reviewsData} className="BigNumberComponent" />
      <Recomendation />
      <StarList reviewsData={props.reviewsData} />
      <Sliders />
    </div>
  );
}

export default Ratings;
