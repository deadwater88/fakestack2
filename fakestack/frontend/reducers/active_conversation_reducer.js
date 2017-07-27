import { CREATE_ROOM } from '../actions/messaging_actions';
import merge from 'lodash/merge';


const activeConversationReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case CREATE_ROOM:
      newState[action.recipient.id] = action.recipient;
      newState[action.recipient.id].roomStamp = Date.now();
      return newState;
    case CREATE_EMPTY_ROOM:

    case DESTROY_ROOM:
      newState[action.conversation.id] = action.conversation;
      return newState;
    default:
      return state;
  }
};

export default messagingReducer;
