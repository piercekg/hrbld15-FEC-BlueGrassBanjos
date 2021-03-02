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
      <div>
        <p className="relatedProductCategory">{this.product.category}</p>
        <p className="relatedProductName" onClick={() => this.handleClick()}>{this.product.name}</p>
        <p className="relatedProductPrice">{this.product.default_price}</p>
        <div>
          {this.state.clicked ? <ComparisonModal selectedProduct={this.selectedProduct} product={this.product}/> : null}
        </div>
      </div>
    )
  }

};

export default RelatedProduct;