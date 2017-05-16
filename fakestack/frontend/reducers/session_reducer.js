import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.user,
        errors: []
      };
    case RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };
    case CLEAR_ERRORS:
      const newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
