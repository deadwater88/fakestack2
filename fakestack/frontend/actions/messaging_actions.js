import * as MessagingAPIUtil from "../utils/messaging_api_util";


import {receiveNotice, RECEIVE_NOTICE, receiveErrors} from './notice_actions';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const CREATE_ROOM = "CREATE_ROOM";
export const OPEN_ROOM = "OPEN_ROOM";
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';


export const fetchConversations = () => dispatch => {
  return MessagingAPIUtil.fetchConversations().then(
    (res) => {
      dispatch(receiveConversations(res))
    },
    (err) => dispatch(receiveErrors(err))
  );
};

export const sendMessage = (data) => {
  return MessagingAPIUtil.sendMessage(data);
};

export const openRoom = (recipient_id) => ({
  type: OPEN_ROOM,
  recipient_id
});

export const receiveConversations = (conversations) => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveConversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

export const createNewRoom = () => ({
  type: CREATE_ROOM
});

export const setupMessagingChannel = (store) => {
    App.room.received = (conversation) => {
      store.dispatch(receiveConversation(conversation));
    };
};
