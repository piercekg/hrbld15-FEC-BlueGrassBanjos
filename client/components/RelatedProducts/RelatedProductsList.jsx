import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import { Carousel } from 'react-bootstrap';

const RelatedProductsList = (props) => (
  <div className="relatedProductList">
    <Carousel>

    {props.relatedProducts.map(product => {
      return (
        <RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
      );
    })}

    </Carousel>
  </div>
);

export default RelatedProductsList;