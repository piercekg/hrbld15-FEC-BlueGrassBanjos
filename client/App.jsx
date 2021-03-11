/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */

import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import RelatedProducts_Outfit from './components/RelatedProducts_Outfit/RelatedProducts_Outfit'
import Overview from './components/productOverview/displayOverview';
import QandA from './components/QandA/QandA';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 18080,
    };
  }

  render() {
    const prod = this.state;
    return (
      <Router>
        <Overview product={prod.product} />
        <RelatedProducts_Outfit />
        <QandA />
      </Router>
    );
  }
};

export default App;
