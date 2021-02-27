import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div className="hello">Hello World!!!!</div>
      </Router>
    );
  }
}

export default App;
