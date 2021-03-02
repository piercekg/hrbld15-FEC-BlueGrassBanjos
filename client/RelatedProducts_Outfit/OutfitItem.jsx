import React from 'react';

const OutfitItem = (props) => (
  <div>
    <p className="relatedProductCategory">{props.product.category}</p>
    <p className="relatedProductName" onClick={() => props.onClick(props.product.id)}>{props.product.name}</p>
    <p className="relatedProductPrice">{props.product.default_price}</p>
  </div>
);

export default OutfitItem;