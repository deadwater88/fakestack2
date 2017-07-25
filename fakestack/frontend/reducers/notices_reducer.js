import { RECEIVE_NOTICE, RECEIVE_NOTICES, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/notice_actions';
import merge from 'lodash/merge';


const NoticesReducer = (state = {events: [], errors: []}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_NOTICES:
      return action.notices;
    case RECEIVE_NOTICE:
      newState.events.pop();
      newState.events.shift(action.notice);
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default NoticesReducer;
