/* eslint-disable react/no-unused-state */
import React from 'react';

const requests = require('../requests.js');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      style: {},
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
      }
    });
  }

  render() {
    this.prod = this.state;
    this.style = this.prod.style;
    this.prod = this.prod.product;
    return (
      <div>
        <h1>{this.prod.name}</h1>
        <h5>{this.prod.default_price}</h5>
        <h3>{this.prod.category}</h3>
      </div>
    );
  }
}

export default Overview;
