import React from 'react';
import { Provider } from 'react-redux';
import { RestfulProvider } from 'restful-react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';

const history = createHistory();

const App = ({ store }) => (
  <Provider store={store}>
    <RestfulProvider base="https://test.wefindx.io">
      <Router history={history}>
        <Route
          exact={true}
          path="/"
          component={Dashboard}
        />
      </Router>
    </RestfulProvider>
  </Provider>
);

export default App;
