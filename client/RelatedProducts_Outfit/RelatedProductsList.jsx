import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';

const RelatedProductsList = (props) => (
  <div>
    {props.products.map(product => {
      return (<RelatedProduct product={product} key={product.id}/>)
    })}
  </div>
);

export default RelatedProductsList;