/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/:id" exact component={App} />
  </Router>, document.getElementById('app'),
);
