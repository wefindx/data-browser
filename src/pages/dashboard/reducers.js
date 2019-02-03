import { WIDGET_SEARCH, WIDGET_CLOCK } from './widgets';
import { OPEN_WINDOW, CLOSE_WINDOW, UPDATE_WINDOWS } from './actions';

const initialState = {
  direction: 'row',
  first: WIDGET_SEARCH,
  second: WIDGET_CLOCK,
  splitPercentage: 80
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_WINDOW:
      if (state && typeof state === 'string' && state !== action.id) {
        return initialState;
      } else if (!state) {
        return action.id;
      }
      return state;

    case CLOSE_WINDOW:
      if (state && typeof state === 'object') {
        return action.id === WIDGET_SEARCH ? WIDGET_CLOCK : WIDGET_SEARCH;
      } else if (state && state === action.id) {
        return null;
      }
      return state;
    case UPDATE_WINDOWS:
      return action.newNode;
    default:
      return state;
  }
}

export default dashboard;
