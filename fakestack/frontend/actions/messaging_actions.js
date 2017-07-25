import * as MessagingAPIUtil from "../utils/messaging_api_util";


import {receiveNotice, RECEIVE_NOTICE, receiveErrors} from './notice_actions';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const CREATE_ROOM = "CREATE_ROOM";
export const OPEN_ROOM = "OPEN_ROOM";
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';


export const fetchConversations = () => dispatch => {
  return MessagingAPIUtil.fetchConversations().then(
    (res) => dispatch(receiveConversations(res)),
    (err) => dispatch(receiveErrors(err))
  );
};

export const sendMessage = (recipient_id, data) => () => {
  return MessagingAPIUtil.sendMessage(recipient_id, data);
};

export const openRoom = (recipient_id) => ({
  type: OPEN_ROOM,
  recipient_id
});

export const receiveConversations = (conversations)=>({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const createNewRoom = () => ({
  type: CREATE_ROOM
});
