import React from 'react';
import { Card, CardDeck, Carousel } from 'react-bootstrap';
import OutfitItem from './OutfitItem.jsx';

const OutfitItemsList = (props) => (
  <div className="relatedProductList">
    <CardDeck className="relatedProductDeck">
      <Card style={{ width: '18rem' }} className="product-card" onClick={() => props.addItem(props.selectedProduct)}>
        <Card.Body>
          <Card.Text>＋<br></br>Add to Outfit</Card.Text>
        </Card.Body>
      </Card>
        {props.products.map(product => {
          return (<OutfitItem product={product} key={product.id} removeItem={props.removeItem}/>);
        })}
    </CardDeck>
    {/*<button type="button" onClick={() => props.clearOutfit()}>Clear Outfit</button>*/}
  </div>

);

export default OutfitItemsList;