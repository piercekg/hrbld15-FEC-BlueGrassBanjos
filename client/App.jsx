import React from 'react';
import RelatedProducts_Outfit from './RelatedProducts_Outfit/RelatedProducts_Outfit'
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        {<RelatedProducts_Outfit/>}
      </Router>
    );
  }
};

export default App;
