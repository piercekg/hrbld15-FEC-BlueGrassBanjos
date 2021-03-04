import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';

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

  render () {

    return (
      <div className="relatedProductCard">
        <button type="button" className="relatedProductAction" onClick={() => this.handleClick()}>*star icon*</button>
        <img src={`${this.product.styles[0].photos[0].thumbnail_url}`} ></img>
        <p className="relatedProductCategory">{this.product.category}</p>
        <p className="relatedProductName">{this.product.name}</p>
        <p className="relatedProductPrice">${this.product.default_price}</p>
        <div className="relatedProductRating">{this.product.averageRating ? `*# of stars*: ${this.product.averageRating}` : null}</div>
        <div className="relatedProductReviews">{this.product.reviews.length ? `${this.product.reviews.length} reviews` : null}</div>
        <div>
          {this.state.clicked ? <ComparisonModal selectedProduct={this.selectedProduct} product={this.product} onClick={this.handleClick}/> : null}
        </div>
      </div>
    )
  }

};

export default RelatedProduct;