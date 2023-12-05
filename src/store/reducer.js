import { SET_DB_SETTINGS, SET_LS_SETTINGS } from './actions';

const intialState = {
  savedType: 'ls',
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_DB_SETTINGS:
      localStorage.setItem('settings', 'db');
      return { ...state, savedType: 'db' };
    case SET_LS_SETTINGS:
      localStorage.setItem('settings', 'ls');
      return { ...state, savedType: 'ls' };
    default:
      return state;
  }
};
