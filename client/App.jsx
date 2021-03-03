import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Overview from './productOverview/displayOverview';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: 18201,
    };
  }

  render() {
    const prod = this.state;
    return (
      <Router>
        <div className="hello">Hello World!!!!</div>
        <Overview product={prod.product} />
      </Router>
    );
  }
}

export default App;
