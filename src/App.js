import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Search from './Search';

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
