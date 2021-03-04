import React from 'react';

const defaultStyle = (product) => {
  var defaultStyle = product.styles[0];;
  if (product.styles.length < 2) {
    defaultStyle = product.styles[0];
  } else {
    product.styles.forEach(style => {
      if (style['default?']) {
        defaultStyle = style;
      }
    });
  }
  return defaultStyle;
};

const OutfitItem = (props) => {
  var dfStyle = defaultStyle(props.product);

  return (
  <div className="relatedProductCard">
    <button type="button" onClick={() => props.removeItem(props.product.id)}>X icon</button>
    <img src={`${dfStyle.photos[0].thumbnail_url}`} alt={`${dfStyle.name}`}></img>
    <p className="relatedProductCategory">{props.product.category}</p>
    <p className="relatedProductName" onClick={() => props.onClick(props.product.id)}>{props.product.name}</p>
    <p className="relatedProductPrice">${props.product.default_price}</p>
    <div className="relatedProductRating">{props.product.averageRating ? `*# of stars*: ${props.product.averageRating}` : null}</div>
    <div className="relatedProductReviews">{props.product.reviews.length ? `${props.product.reviews.length} reviews` : null}</div>
  </div>
)};

export default OutfitItem;
