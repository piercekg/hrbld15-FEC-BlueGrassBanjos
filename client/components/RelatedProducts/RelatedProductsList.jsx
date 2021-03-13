import React, { useState } from 'react';
import RelatedProduct from './RelatedProduct.jsx';

const RelatedProductsList = (props) => {
  if (props.relatedProducts.length > 0) {
    return (
      <React.Fragment>
        <div className="d-flex flex-nowrap carousel-outer">
          <div className="d-flex flex-row carousel">
            {props.relatedProducts.map(product => {
              return (
                <RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick} productClick={props.productClick}/>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    )
  } else {
    return null;
  }
};

export default RelatedProductsList;

/*
        {props.relatedProducts.map(product => {
          return (
            <Carousel.Item>
              <RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
            </Carousel.Item>
          );
        })}
*/

/*
       <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[0]} key={props.relatedProducts[0].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[1]} key={props.relatedProducts[1].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[2]} key={props.relatedProducts[2].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
          <Carousel.Item>
            <RelatedProduct product={props.relatedProducts[3]} key={props.relatedProducts[3].id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
          </Carousel.Item>
*/