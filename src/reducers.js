import { combineReducers } from 'redux';
import dashboard from './pages/dashboard/reducers';

const app = (state = {}, action) => state;

export default combineReducers({
  app,
  dashboard
});


