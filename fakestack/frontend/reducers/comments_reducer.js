import { RECEIVE_COMMENTS, RECEIVE_COMMENT, RECEIVE_RELEVANT_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';


const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RELEVANT_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
      case REMOVE_COMMENT:
        delete newState[action.comment.id];
        return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
