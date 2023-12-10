import {
  END_EDITING,
  SET_DB_SETTINGS,
  SET_LS_SETTINGS,
  START_EDITING,
} from './actions';

const intialState = {
  savedType: 'ls',
  editing: false,
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_DB_SETTINGS:
      localStorage.setItem('settings', 'db');
      return { ...state, savedType: 'db' };
    case SET_LS_SETTINGS:
      localStorage.setItem('settings', 'ls');
      return { ...state, savedType: 'ls' };
    case START_EDITING:
      return { ...state, editing: true };
    case END_EDITING:
      return { ...state, editing: false };
    default:
      return state;
  }
};
