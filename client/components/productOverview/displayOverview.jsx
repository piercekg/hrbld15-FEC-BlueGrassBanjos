/* eslint-disable react/no-unused-state */
import React from 'react';
import Gallery from './imagesGallery';
import Cart from './cart';
// import { $, jQuery } from 'jquery';

import requests from '../../requests';
import StyleSelector from './styleSelector';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      style: null,
      selected: 0,
    };
    this.getProduct(props);
    this.getStyles(props);

    this.changeStyle = this.changeStyle.bind(this);
  }

  componentDidUpdate(prevProps) {
    //console.log('prevProps ' + prevProps.product);
    //console.log('currentProps ' + this.props.product);
    if (this.props.product !== prevProps.product) {
      this.getProduct(this.props);
      this.getStyles(this.props);
    }
  }

  getProduct(props) {
    requests.getProductInfo(props.product, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          product: data.data,
        });
      }
    });
  }

  getStyles(props) {
    requests.getProductStyles(props.product, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          style: data.data.results,
        });
      }
    });
  }

  changeStyle(index) {
    this.setState({
      selected: index,
    });
  }

  render() {
    this.sel = this.state;
    if (!this.sel.style || !this.sel.product) {
      return <div />;
    }
    this.style = this.sel.style;
    this.product = this.sel.product;
    this.selected = this.sel.selected;
    return (
      <div>
        <div className="left-parent parent">
          <h1>
            <Gallery
              product={this.product.name}
              style={this.style[this.selected]}
            />
          </h1>
        </div>
        <div className="right-parent parent">
          <h3>Stars go here</h3>
          <h3>{this.product.category}</h3>
          <h1>{this.product.name}</h1>
          <h5>{this.product.default_price}</h5>
          <div>
            <StyleSelector
              styles={this.style}
              changeStyleParent={this.changeStyle}
              currentStyle={this.selected}
            />
            <Cart
              style={this.style[this.selected].skus}
            />
          </div>
          <h5>{this.product.slogan}</h5>
          <p>{this.product.description}</p>
        </div>
      </div>
    );
  }
}

export default Overview;
