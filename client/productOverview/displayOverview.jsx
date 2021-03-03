/* eslint-disable react/no-unused-state */
import React from 'react';
import Gallery from './imagesGallery';

const requests = require('../requests.js');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      style: null,
    };
    this.getProduct(props);
    this.getStyles(props);
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

        console.log('style stuffs work?: ', this.style[0].photos[0].url);
      }
    });
  }

  render() {
    this.prod = this.state;
    if (!this.prod.style || !this.prod.product) {
      return <div />;
    }
    this.style = this.prod.style;
    this.product = this.prod.product;
    // console.log('should be url: ', this.style[0]);
    return (
      <div>
        <h1>
          <Gallery
            image={this.style[0].photos[0].url}
            product={this.product.name}
            style={this.style[0].name}
          />
        </h1>
        <h1>{this.product.name}</h1>
        <h5>{this.product.default_price}</h5>
        <h3>{this.product.category}</h3>
      </div>
    );
  }
}

export default Overview;
