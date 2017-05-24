import { RECEIVE_NOTICE } from '../actions/post_actions';
import merge from 'lodash/merge';


const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
    default:
      return state;
  }
};

export default PostsReducer;
