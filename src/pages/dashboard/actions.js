/*
 * action types
 */
export const OPEN_WINDOW = 'OPEN_WINDOW';
export const CLOSE_WINDOW = 'CLOSE_WINDOW';
export const UPDATE_WINDOWS = 'UPDATE_WINDOWS';

/*
 * action creators
 */
export const openWindow = id => ({
  type: OPEN_WINDOW,
  id
});

export const closeWindow = id => ({
  type: CLOSE_WINDOW,
  id
});

export const updateWindows = newNode => ({
  type: UPDATE_WINDOWS,
  newNode
})
