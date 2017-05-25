import merge from 'lodash/merge';

import {RECEIVE_PROP, RECEIVE_PROFILE_ERRORS,  RECEIVE_CURRENT_USER_PROFILE, CLEAR_ERRORS} from '../actions/profiles_actions';


const CurrentUserProfileReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_PROFILE:
      return action.currentUserProfile;
    case RECEIVE_PROP:
      return  merge(newState, action.prop);
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

export default CurrentUserProfileReducer;
