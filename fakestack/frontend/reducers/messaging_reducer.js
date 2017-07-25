import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION } from '../actions/messaging_actions';
import merge from 'lodash/merge';


const messagingReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return action.conversations;
    case RECEIVE_CONVERSATION:
      newState[action.conversation.id] = action.conversation;
      return newState;
    default:
      return state;
  }
};

export default messagingReducer;
