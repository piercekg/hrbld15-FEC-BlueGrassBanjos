import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';

const RelatedProductsList = (props) => (
  <div className="relatedProductList">
    <div className="carousel carousel-transition">
    {props.relatedProducts.map(product => {
      return (<RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>)
    })}
    </div>
    <button className="scroll-button">Scroll</button>
  </div>
);

export default RelatedProductsList;