import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';
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
    default:
      return state;
  }
};

export default PostsReducer;
