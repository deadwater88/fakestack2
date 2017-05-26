import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CurrentUserProfileReducer from './current_user_profile_reducer';
import viewedUserProfileReducer from './viewed_user_profile_reducer';
import RelevantUsersReducer from './relevant_users_reducer';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';
import NoticesReducer from './notices_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  currentUserProfile: CurrentUserProfileReducer,
  viewedUserProfile: viewedUserProfileReducer,
  relevantUsers: RelevantUsersReducer,
  posts: PostsReducer ,
  comments: CommentsReducer,
  notices: NoticesReducer
});

export default rootReducer;
