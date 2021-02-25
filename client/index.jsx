import React from 'react';
import ReactDOM from 'react-dom';
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
        <div>Hello World!!!!</div>
      </Router>
    );
  }
}

// ReactDOM.render(< App/>, document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
