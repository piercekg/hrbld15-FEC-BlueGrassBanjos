import React from 'react';
import OutfitItem from './OutfitItem.jsx';

const OutfitItemsList = (props) => (
  <div>
    {props.products.map(product => {
      return (<OutfitItem product={product} key={product.id} onClick={props.onClick}/>)
    })}
    <button type="button"></button>
  </div>
);

export default OutfitItemsList;