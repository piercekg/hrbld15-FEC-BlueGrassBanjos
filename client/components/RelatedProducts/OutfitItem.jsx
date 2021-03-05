import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

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
    <Carousel.Item>
      <Card style={{ width: '18rem' }}>
        <button type="button" className="relatedProductAction" onClick={() => props.removeItem(props.product.id)}>✖️</button>
        <Card.Img variant="top" src={`${dfStyle.photos[0].thumbnail_url}`} alt={`${dfStyle.name}`}></Card.Img>
        <Card.Body>
          <Card.Text>{props.product.category}</Card.Text>
          <Card.Text>{props.product.name}</Card.Text>
          <Card.Text>${props.product.default_price}</Card.Text>
          <Card.Text>{props.product.averageRating ? `*# of stars*: ${props.product.averageRating}` : null}</Card.Text>
          <Card.Text>{props.product.reviews.length ? `${props.product.reviews.length} reviews` : null}</Card.Text>
        </Card.Body>
      </Card>
    </Carousel.Item>
  );
};

export default OutfitItem;
