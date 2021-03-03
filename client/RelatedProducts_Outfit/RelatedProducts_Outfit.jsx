import React from 'react';
import products from '../exampleData.js';
import RelatedProductsList from './RelatedProductsList';
import OutfitItemsList from './OutfitItemsList'
import SelectedProduct from './SelectedProduct'
import { getRelatedProducts, getSelectedProduct, getProductReviews } from '../requests.js';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

class RelatedProducts_Outfit extends React.Component {
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
    this.handleProductChange(18082);
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
    getSelectedProduct(productId, (err, data) => {
      var product = this.averageRating([data.data]);
      this.updateSelectedProduct(product[0]);
      this.handleRelatedProducts(productId);
    })
  }

  handleRelatedProducts(productId) {
    getRelatedProducts(productId, (err, data) => {
      var products = this.averageRating(data.data);
      this.updateProducts(products);
    });
  }

  averageRating(products) {
    products.forEach(product => {
      var sum = 0;
      product.results.forEach(review => {
        sum += review.rating;
      })
      product.averageRating = sum / product.results.length;
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
        <h2>Selected Product:</h2>
        {<SelectedProduct product={this.state.selectedProduct}/>}
        <h2>Related Products:</h2>
        {<RelatedProductsList selectedProduct={this.state.selectedProduct} relatedProducts={this.state.relatedProducts} onClick={this.handleSaveItem}/>}
        <h2>Your Outfit Items:</h2>
        {<OutfitItemsList products={this.state.outfit} selectedProduct={this.state.selectedProduct} addItem={this.handleSaveItem} removeItem={this.removeOutfitItem} clearOutfit={this.clearOutfit}/>}
      </Router>
    );
  }
}

export default RelatedProducts_Outfit;
