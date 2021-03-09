import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import { Col, Card } from 'react-bootstrap';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.product = props.product;
    this.place = props.place;
    this.selectedProduct = props.selectedProduct
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  defaultStyle(product) {
    var defaultStyle = this.product.styles[0];;
    if (this.product.styles.length < 2) {
      defaultStyle = this.product.styles[0];
    } else {
      this.product.styles.forEach(style => {
        if (style['default?']) {
          defaultStyle = style;
        }
      });
    }
    return defaultStyle;
  }

  render () {
    var dfStyle = this.defaultStyle(this.product);
    return (
      <React.Fragment>
        <Card style={{ width: '18rem' }} className="product-card">
          <button type="button" className="relatedProductAction" onClick={() => this.handleClick()}>☆</button>
          <Card.Img variant="top" style={{ width: 'auto', height: '22rem' }} src={`${dfStyle.photos[0].thumbnail_url}`} alt={`${dfStyle.name}`}></Card.Img>
          <Card.Body>
            <Card.Text>{this.product.category}</Card.Text>
            <Card.Text>{this.product.name}</Card.Text>
            <Card.Text>${this.product.default_price}</Card.Text>
            <Card.Text>{this.product.averageRating ? `*# of stars*: ${this.product.averageRating}` : null}</Card.Text>
            <Card.Text>{this.product.reviews.length ? `${this.product.reviews.length} reviews` : null}</Card.Text>
          </Card.Body>
        </Card>
        <div>
          {this.state.clicked ? <ComparisonModal selectedProduct={this.selectedProduct} product={this.product} onClick={this.handleClick}/> : null}
        </div>
      </React.Fragment>
    );
  }
};

export default RelatedProduct;

/*
this.product.styles[0].photos[0].thumbnail_url
*/