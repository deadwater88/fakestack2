import { RECEIVE_PROFILE_ERRORS, RECEIVE_CURRENT_PROFILE, CLEAR_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';


const CurrentUserReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_PROFILE:
      return {};
    case RECEIVE_PROFILE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default CurrentUserReducer;
