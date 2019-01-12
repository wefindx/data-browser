import React, { Component } from 'react';
import './App.css';
import { Fetch } from 'react-request';
import { Route, Switch, Redirect } from "react-router-dom";
import Search from './Search';

import {
  Card,
  CardTitle,
  CardColumns,
  CardSubtitle,
  CardBody,
  Navbar,
  InputGroup, Input
} from 'reactstrap';

import ReactMarkdown from 'react-markdown';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact={true}
          path="/"
          component={Search}
        />
      </Switch>
    );

  }
}

export default App;
