import React from 'react';

const SelectedProduct = (props) => (
  <div>
    <p className="selectedProductCategory">{props.product.category}</p>
    <p className="selectedProductName">{props.product.name}</p>
    <p className="selectedProductPrice">${props.product.default_price}</p>
    <div className="selectedProductRating">{props.product.averageRating ? `*# of stars*: ${props.product.averageRating}` : null}</div>
    <div className="selectedProductReviews">{props.product.results ? `${props.product.results.length} reviews` : null}</div>
  </div>
);

export default SelectedProduct;