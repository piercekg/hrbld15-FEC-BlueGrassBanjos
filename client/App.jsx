import React from 'react';
import products from './exampleData.js';
import RelatedProductsList from './RelatedProducts_Outfit/RelatedProductsList';
import OutfitItemsList from './RelatedProducts_Outfit/OutfitItemsList'
import SelectedProduct from './RelatedProducts_Outfit/SelectedProduct'
import ClearOutfit from './RelatedProducts_Outfit/ClearOutfit'
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
      relatedProducts: products,
      outfit: []
    };
    this.handleSaveItem = this.handleSaveItem.bind(this);
    this.removeOutfitItem = this.removeOutfitItem.bind(this);
    this.clearOutfit = this.clearOutfit.bind(this);
  }

  componentDidMount() {
    this.handleProductChange(18445);
    this.retrieveOutfitItems();
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

  updateOutfit(products) {
    this.setState({
      outfit: products
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
        {<SelectedProduct product={this.state.selectedProduct} onClick={this.handleSaveItem}/>}
        <h2>Related Products:</h2>
        {<RelatedProductsList selectedProduct={this.state.selectedProduct} relatedProducts={this.state.relatedProducts} onClick={this.handleSaveItem}/>}
        <h2>Your Outfit Items:</h2>
        {<OutfitItemsList products={this.state.outfit} onClick={this.removeOutfitItem}/>}
        {<ClearOutfit onClick={this.clearOutfit}/>}
      </Router>
    );
  }
}

export default App;
