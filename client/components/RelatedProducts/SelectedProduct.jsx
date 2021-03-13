import React from 'react';

const SelectedProduct = (props) => (
  <React.Fragment>
    <p className="selectedProductCategory">{props.product.category}</p>
    <p className="selectedProductName">{props.product.name}</p>
    <p className="selectedProductPrice">${props.product.default_price}</p>
    <div className="selectedProductRating">{props.product.averageRating ? `*# of stars*: ${props.product.averageRating}` : null}</div>
    <div className="selectedProductReviews">{props.product.reviews ? `${props.product.reviews.length} reviews` : null}</div>
  </React.Fragment>
);

export default SelectedProduct;