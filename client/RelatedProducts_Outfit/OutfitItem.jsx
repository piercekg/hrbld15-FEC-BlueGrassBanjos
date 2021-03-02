import React from 'react';

const OutfitItem = (props) => (
  <div className="outfitItem">
    <button type="button" onClick={() => props.removeItem(props.product.id)}>X icon</button>
    <p className="relatedProductCategory">{props.product.category}</p>
    <p className="relatedProductName" onClick={() => props.onClick(props.product.id)}>{props.product.name}</p>
    <p className="relatedProductPrice">${props.product.default_price}</p>
    <div className="relatedProductRating"># of *stars*: {props.product.averageRating}</div>
  </div>
);

export default OutfitItem;