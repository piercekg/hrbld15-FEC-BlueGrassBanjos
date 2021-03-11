import React from 'react';
import products from '../../exampleData.js';
import RelatedProductsList from './RelatedProductsList';
import OutfitItemsList from './OutfitItemsList'
import SelectedProduct from './SelectedProduct'
import requests from '../../requests.js';

import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      relatedProducts: [],
      outfit: []
    };
    this.handleSaveItem = this.handleSaveItem.bind(this);
    this.removeOutfitItem = this.removeOutfitItem.bind(this);
    this.clearOutfit = this.clearOutfit.bind(this);
  }

  componentDidMount() {
    this.handleProductChange(18445);
    this.retrieveOutfitItems();
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

  updateOutfit(products) {
    this.setState({
      outfit: products
    });
  }

  handleProductChange(productId) {
    requests.getProductInfo(productId, (err, data) => {
      var product = this.averageRating([data.data]);
      this.updateSelectedProduct(product[0]);
      this.handleRelatedProducts(productId);
    })
  }

  handleRelatedProducts(productId) {
    requests.getRelatedProducts(productId, (err, data) => {
      var products = this.averageRating(data.data);
      this.updateProducts(products);
    });
  }

  averageRating(products) {
    products.forEach(product => {
      var sum = 0;
      product.reviews.forEach(review => {
        sum += review.rating;
      })
      product.averageRating = sum / product.reviews.length;
    })
    return products;
  }

  handleSaveItem (product) {
    window.localStorage.setItem(product.id, JSON.stringify(product));
    this.retrieveOutfitItems();
  }

  retrieveOutfitItems () {
    var products = [];
    for (var i = 0; i < localStorage.length; i ++) {
      products.push(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))));
    }
    this.updateOutfit(products);
  }

  removeOutfitItem (productId) {
    window.localStorage.removeItem(productId);
    this.retrieveOutfitItems();
  }

  clearOutfit () {
    window.localStorage.clear();
    this.retrieveOutfitItems();
  }

  render() {
    return (
      <Router>
        <p className="text-uppercase list-name">Related Products</p>
        {<RelatedProductsList selectedProduct={this.state.selectedProduct} relatedProducts={this.state.relatedProducts} onClick={this.handleSaveItem}/>}
        <p className="text-uppercase list-name">Your Outfit</p>
        {<OutfitItemsList products={this.state.outfit} selectedProduct={this.state.selectedProduct} addItem={this.handleSaveItem} removeItem={this.removeOutfitItem} clearOutfit={this.clearOutfit}/>}
      </Router>
    );
  }
}

export default RelatedProducts;

/*
<h2>Selected Product:</h2>
{<SelectedProduct product={this.state.selectedProduct}/>}
*/