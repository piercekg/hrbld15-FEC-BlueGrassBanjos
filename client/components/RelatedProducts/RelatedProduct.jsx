import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import { Card, Carousel } from 'react-bootstrap';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.product = props.product;
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
        <div className="carousel-item col-md-4">
          <div className="card">
            <button type="button" className="relatedProductAction" onClick={() => this.handleClick()}>☆</button>
            <img className="card-img-top img-fluid" src={`${dfStyle.photos[0].thumbnail_url}`} alt={`${dfStyle.name}`}></img>
            <div className="card-body">
              <p className="card-text">{this.product.category}</p>
              <p className="card-text">{this.product.name}</p>
              <p className="card-text">${this.product.default_price}</p>
              <p className="card-text">{this.product.averageRating ? `*# of stars*: ${this.product.averageRating}` : null}</p>
              <p className="card-text">{this.product.reviews.length ? `${this.product.reviews.length} reviews` : null}</p>
            </div>
          </div>
        </div>
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