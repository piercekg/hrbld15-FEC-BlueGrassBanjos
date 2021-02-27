import React from 'react';

const RelatedProduct = (props) => (
  <div>
    <p>{props.product.category}<br></br>{props.product.name}<br></br>{props.product.default_price}</p>
  </div>
);

export default RelatedProduct;