import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';

const RelatedProductsList = (props) => (
  <div>
    {props.relatedProducts.map(product => {
      return (<RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>)
    })}
  </div>
);

export default RelatedProductsList;