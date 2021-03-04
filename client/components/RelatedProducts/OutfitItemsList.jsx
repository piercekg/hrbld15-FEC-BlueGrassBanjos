import React from 'react';
import OutfitItem from './OutfitItem.jsx';

const OutfitItemsList = (props) => (
  <div className="relatedProductList">
    <div className="carousel carousel-transition">
    <div className="relatedProductCard" onClick={() => props.addItem(props.selectedProduct)}>
      <div className="addProductCard">＋<br></br>Add to Outfit</div>
    </div>
    {props.products.map(product => {
      return (<OutfitItem product={product} key={product.id} removeItem={props.removeItem}/>)
    })}
    {/*<button type="button" onClick={() => props.clearOutfit()}>Clear Outfit</button>*/}
  </div>
    </div>

);

export default OutfitItemsList;