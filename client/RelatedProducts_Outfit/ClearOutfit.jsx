import React from 'react';

const ClearOutfit = (props) => (
  <div>
    <button type="button" onClick={() => props.onClick()}>Clear Outfit</button>
  </div>
);

export default ClearOutfit;