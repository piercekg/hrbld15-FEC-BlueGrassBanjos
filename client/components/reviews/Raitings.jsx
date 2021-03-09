/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import BigNumber from './BigNumber';
import Recomendation from './Recomendation';
import StarList from './StarList';
import Sliders from './Sliders';

function Raitings(props) {
  return (
    <div>
      <BigNumber reviewsData={props.reviewsData} />
      <Recomendation />
      <StarList reviewsData={props.reviewsData} />
      <Sliders />
    </div>
  );
}

export default Raitings;
