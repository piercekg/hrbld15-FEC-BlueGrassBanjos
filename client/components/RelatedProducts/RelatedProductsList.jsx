import React, { useState } from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import { CardDeck, CardGroup, Carousel } from 'react-bootstrap';

const RelatedProductsList = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (props.relatedProducts.length > 0) {
    return (
      <div className="relatedProductList">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {props.relatedProducts.map(product => {
            return (
              <Carousel.Item key={product.id}>
                <RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
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