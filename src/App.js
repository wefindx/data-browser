import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';

const history = createHistory();

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route
        exact={true}
        path="/"
        component={Dashboard}
      />
    </Router>
  </Provider>
);

export default App;
