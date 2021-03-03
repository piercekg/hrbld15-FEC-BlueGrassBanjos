import React from 'react';
import OutfitItem from './OutfitItem.jsx';

const OutfitItemsList = (props) => (
  <div>
    <div className="outfitItem" onClick={() => props.addItem(props.selectedProduct)}>+ icon +: Add to Outfit</div>
    {props.products.map(product => {
      return (<OutfitItem product={product} key={product.id} removeItem={props.removeItem}/>)
    })}
    {/*<button type="button" onClick={() => props.clearOutfit()}>Clear Outfit</button>*/}
  </div>
);

export default OutfitItemsList;