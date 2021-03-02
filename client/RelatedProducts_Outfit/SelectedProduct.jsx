import React from 'react';

const SelectedProduct = (props) => (
  <div>
    <p className="selectedProductCategory">{props.product.category}</p>
    <p className="selectedProductName" onClick={() => props.onClick(props.product)}>{props.product.name}</p>
    <p className="selectedProductPrice">{props.product.default_price}</p>
  </div>
);

export default SelectedProduct;