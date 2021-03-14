/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */

import React from 'react';
import Header from './components/Header/Header';
import Overview from './components/productOverview/displayOverview';
import QandA from './components/QandA/QandA';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import ReviewsComponent from './components/reviews/ReviewsComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.match.params.id,
    };
    this.handleProductClick = this.handleProductClick.bind(this);
  }

  handleProductClick(product_id) {
    if (product_id.toString().length !== 5) {
      alert('Please Enter A Valid Product Id');
    } else {
      this.setState({
        product: product_id,
      });
    }
  }

  render() {
    const prod = this.state;
    if (!prod.product) {
      prod.product = 18078;
    }
    return (
      <div className="container-fluid app-container">
        <div className="container-fluid logo-border">
          <Header searchProduct={this.handleProductClick} />
        </div>

        <div className="container-fluid component-body">
          <a id="Overview">
            <Overview product={prod.product} />
          </a>
          <a id="RelatedProducts">
            <RelatedProducts selectedProduct={this.state.product} productClick={this.handleProductClick}/>
          </a>
          <a id="QandA">
            <QandA productId={prod.product} />
          </a>
          <a id="ReviewsComponent">
            <ReviewsComponent product={prod.product} />
          </a>
          <div className="container-fluid footer">
            <div className="footer-text">
              Copywrite: BLUEGRASS BANJOS!!!!! @2021
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
