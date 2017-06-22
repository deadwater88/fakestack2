import { RECEIVE_PROFILE_ERRORS, RECEIVE_VIEWED_PROFILE, CLEAR_ERRORS, RECEIVE_VIEWED_PROFILE_PROP } from '../actions/profiles_actions';
import merge from 'lodash/merge';


const viewedUserProfileReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_VIEWED_PROFILE:
      return action.viewedUserProfile;
    case RECEIVE_PROFILE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case RECEIVE_VIEWED_PROFILE_PROP:
      newState = merge(newState, action.prop);
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default viewedUserProfileReducer;
