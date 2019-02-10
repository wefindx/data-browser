import { UPDATE_WINDOWS } from './actions';
import { WIDGET_SEARCH } from './widgets';

const initialState = WIDGET_SEARCH;

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WINDOWS:
      return action.dashboard;

    default:
      return state;
  }
}

export default dashboard;
