import merge from 'lodash/merge';

import {RECEIVE_PROP, RECEIVE_PROFILE_ERRORS,  RECEIVE_CURRENT_USER_PROFILE, CLEAR_ERRORS, RECEIVE_CURRENT_USER_PROP} from '../actions/profiles_actions';


const CurrentUserProfileReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_PROFILE:
      return action.currentUserProfile;
    case RECEIVE_PROP:
      return  merge(newState, action.prop);
    case RECEIVE_CURRENT_USER_PROP:
      newState = merge(newState, action.prop);
      return newState;
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
