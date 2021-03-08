import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import { CardDeck } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RelatedProductsList = (props) => {
  if (props.relatedProducts.length > 0) {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner row w-100 mx-auto">
          {props.relatedProducts.map(product => {
            return (
              <RelatedProduct product={product} key={product.id} selectedProduct={props.selectedProduct} onClick={props.onClick}/>
            );
          })}
        </div>
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