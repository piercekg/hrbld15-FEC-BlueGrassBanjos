import React from 'react';
import products from './exampleData.js';
import RelatedProductsList from './RelatedProducts_Outfit/RelatedProductsList';
import { getRelatedProducts, getSelectedProduct } from './requests.js';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: products[0],
      relatedProducts: products
    };

  }

  componentDidMount() {
    this.handleProductChange(18201);
    //this.handleRelatedProducts(18201);
  }

  updateSelectedProduct(product) {
    this.setState({
      selectedProduct: product
    })
  }

  updateProducts(products) {
    this.setState({
      relatedProducts: products
    });
  }

  handleProductChange(productId) {
    getSelectedProduct(productId, (err, data) => {
      this.updateSelectedProduct(data.data);
      this.handleRelatedProducts(data.data.id);
    })
  }

  handleRelatedProducts(productId) {
    getRelatedProducts(productId, (err, data) => {
      this.updateProducts(data.data);
    });
  }

  render() {
    return (
      <Router>
        <div className="hello">Hello World!!!!</div>
        Related Products:
        {<RelatedProductsList selectedProduct={this.state.selectedProduct} relatedProducts={this.state.relatedProducts}/>}
      </Router>
    );
  }
}

export default App;
