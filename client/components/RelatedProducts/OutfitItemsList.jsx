import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import OutfitItem from './OutfitItem.jsx';

const OutfitItemsList = (props) => (
  <div className="outfitProductList">
    <Card onClick={() => props.addItem(props.selectedProduct)}>
      <Card.Body>
        <Card.Text>＋<br></br>Add to Outfit</Card.Text>
      </Card.Body>
    </Card>
    <Carousel>
      {props.products.map(product => {
        return (<OutfitItem product={product} key={product.id} removeItem={props.removeItem}/>);
      })}
    </Carousel>
    {/*<button type="button" onClick={() => props.clearOutfit()}>Clear Outfit</button>*/}
  </div>

);

export default OutfitItemsList;