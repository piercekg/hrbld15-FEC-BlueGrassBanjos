import React from 'react';

const RelatedProduct = (props) => (
  <div>
    <p className="relatedProductCategory">{props.product.category}</p>
    <p className="relatedProductName">{props.product.name}</p>
    <p className="relatedProductPrice">{props.product.default_price}</p>
  </div>
);

export default RelatedProduct;