import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CurrentUserProfileReducer from './current_user_profile_reducer';
import viewedUserProfileReducer from './viewed_user_profile_reducer';
import RelevantUsersReducer from './relevant_users_reducer';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';
import NoticesReducer from './notices_reducer';
import messagingReducer from './messaging_reducer';
import activeConversationsReducer from './active_conversations_reducer';




const appReducer = combineReducers({
  session: SessionReducer,
  currentUserProfile: CurrentUserProfileReducer,
  viewedUserProfile: viewedUserProfileReducer,
  relevantUsers: RelevantUsersReducer,
  posts: PostsReducer ,
  comments: CommentsReducer,
  notices: NoticesReducer,
  conversations: messagingReducer,
  activeConversations: activeConversationsReducer
});


const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
