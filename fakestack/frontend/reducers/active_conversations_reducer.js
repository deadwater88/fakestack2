import { CREATE_EMPTY_ROOM, BIND_EMPTY_ROOM, CREATE_ROOM, DELETE_ROOM } from '../actions/active_conversations_actions';
import merge from 'lodash/merge';


const activeConversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  let ts = Date.now();
  switch (action.type) {
    case CREATE_EMPTY_ROOM:
      newState[ts] = {timeStamp: ts};
      return newState;
    case BIND_EMPTY_ROOM:
      delete newState[action.conversation.timeStamp];
      newState[action.conversation.recipient.id] = action.conversation;
      return newState;
    case CREATE_ROOM:
      newState[action.recipient.id] = newState[action.recipient.id] ||
                                      {recipient: action.recipient,
                                       timeStamp: Date.now()};
      return newState;
    case DELETE_ROOM:
      let {conversation} = action;
      delete newState[(conversation.recipient ? conversation.recipient.id
        : conversation.timeStamp)];
      return newState;
    default:
      return state;
  }
};

export default activeConversationsReducer;
