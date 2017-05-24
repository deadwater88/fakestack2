import { RECEIVE_RELEVANT_USERS, CLEAR_ERRORS } from '../actions/profiles_actions';
import merge from 'lodash/merge';


const RelevantUsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RELEVANT_USERS:
      return action.relevant_users;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default RelevantUsersReducer;
