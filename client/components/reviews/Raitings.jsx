import React from 'react';
import FiveStars from './FiveStars';
import BigNumber from './BigNumber';
import Recomendation from './Recomendation';
import StarList from './StarList';
import Sliders from './Sliders';

function Raitings() {
  return (
    <div>
      Raitings
      <BigNumber />
      <FiveStars />
      <Recomendation />
      <StarList />
      <Sliders />
    </div>
  );
}

export default Raitings;
