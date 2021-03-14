import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import StarRating from './StarRating';

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
    <React.Fragment>
      <Card style={{ width: '18rem', height: '29rem'}} className="product-card carousel-item">
      <div className="img-overlay">
        <button type="button" className="btn btn-default btn-xs" onClick={() => props.removeItem(props.product.id)}>❌</button>
      </div>
        <Card.Img className="text-justify card-img" variant="top" style={{ width: 'auto', height: '18rem' }} src={`${dfStyle.photos[0].thumbnail_url}`} alt={`${dfStyle.name}`}></Card.Img>
        <Card.Body>
          <Card.Text className="text-uppercase"><small>{props.product.category}</small></Card.Text>
          <Card.Text className="product-name" onClick={() => props.productClick(props.product.id)}><strong>{props.product.name}</strong><br></br>{`${props.product.slogan}`}</Card.Text>
          <Card.Text><small>${props.product.default_price}</small></Card.Text>
          <StarRating rating={props.product.averageRating}/>
          <Card.Text><small>{props.product.reviews.length ? `${props.product.reviews.length} reviews` : '0 reviews'}</small></Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default OutfitItem;

/*
          <Card.Text>{props.product.averageRating ? `*# of stars*: ${props.product.averageRating}` : null}</Card.Text>
*/