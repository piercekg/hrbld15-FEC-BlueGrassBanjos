import React from 'react';
import products from './exampleData.js';
import RelatedProductsList from './RelatedProducts_Outfit/RelatedProductsList';
import { getRelatedProducts } from './requests.js';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: products
    };

  }

  componentDidMount() {
    this.handleProductChange(18201);
  }

  updateProducts(products) {
    this.setState({
      relatedProducts: products
    });
  }

  handleProductChange(productId) {
    getRelatedProducts(productId, (err, data) => {
      console.log(data.data);
      this.updateProducts(data.data);
    });
  }

  render() {
    return (
      <Router>
        <div className="hello">Hello World!!!!</div>
        Related Products:
        {<RelatedProductsList products={this.state.relatedProducts}/>}
      </Router>
    );
  }
}

export default App;
