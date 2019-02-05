import { UPDATE_WINDOWS } from './actions';

const dashboard = (state = null, action) => {
  switch (action.type) {
    case UPDATE_WINDOWS:
      return action.dashboard;

    default:
      return state;
  }
}

export default dashboard;
