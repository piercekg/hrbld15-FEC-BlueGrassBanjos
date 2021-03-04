import React from 'react';

const OutfitItem = (props) => (
  <div className="relatedProductCard">
    <button type="button" onClick={() => props.removeItem(props.product.id)}>X icon</button>
    <img src={`${props.product.styles[0].photos[0].thumbnail_url}`} ></img>
    <p className="relatedProductCategory">{props.product.category}</p>
    <p className="relatedProductName" onClick={() => props.onClick(props.product.id)}>{props.product.name}</p>
    <p className="relatedProductPrice">${props.product.default_price}</p>
    <div className="relatedProductRating">{props.product.averageRating ? `*# of stars*: ${props.product.averageRating}` : null}</div>
    <div className="relatedProductReviews">{props.product.reviews.length ? `${props.product.reviews.length} reviews` : null}</div>
  </div>
);

export default OutfitItem;