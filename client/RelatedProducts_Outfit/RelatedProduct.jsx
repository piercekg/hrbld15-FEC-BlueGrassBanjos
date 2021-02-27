import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedProduct = (props) => (
  <div>
    <p className="relatedProductCategory">{props.product.category}</p>
    <p className="relatedProductName">{props.product.name}</p>
    <p className="relatedProductPrice">{props.product.default_price}</p>
    <div>
      {<ComparisonModal selectedProduct={props.selectedProduct} product={props.product}/>}
    </div>
  </div>
);

export default RelatedProduct;