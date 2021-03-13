import React from 'react';
import { Card, CardDeck, Carousel } from 'react-bootstrap';
import OutfitItem from './OutfitItem.jsx';

const OutfitItemsList = (props) => (
  <div className="d-flex flex-nowrap carousel-outer">
      <Card style={{ width: '18rem', height: '29rem' }} className="product-card carousel-item add-to-outfit" onClick={() => props.addItem(props.selectedProduct)}>
        <Card.Body>
          <h2>
            <Card.Text className="text-center save-text">＋<br></br>Add to Outfit</Card.Text>
          </h2>
        </Card.Body>
      </Card>
      <div className="d-flex flex-row carousel">
        {props.products.map(product => {
          return (
            <OutfitItem product={product} key={product.id} removeItem={props.removeItem} productClick={props.productClick}/>
          );
        })}
    </div>
  </div>
);

export default OutfitItemsList;

/*
    {<button type="button" onClick={() => props.clearOutfit()}>Clear Outfit</button>}
*/