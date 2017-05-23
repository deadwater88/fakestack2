import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CurrentUserProfileReducer from './current_user_profile_reducer';
import viewedUserProfileReducer from './viewed_user_profile_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  currentUserProfile: CurrentUserProfileReducer,
  viewedUserProfile: viewedUserProfileReducer
});

export default rootReducer;
