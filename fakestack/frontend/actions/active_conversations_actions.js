import * as MessagingAPIUtil from "../utils/messaging_api_util";


import {receiveNotice, RECEIVE_NOTICE, receiveErrors} from './notice_actions';

export const CREATE_EMPTY_ROOM = "CREATE_EMPTY_ROOM";
export const BIND_EMPTY_ROOM = "BIND_EMPTY_ROOM";
export const CREATE_ROOM = "CREATE_ROOM";
export const DELETE_ROOM = "DELETE_ROOM";


export const createEmptyRoom = () => ({
  type: CREATE_EMPTY_ROOM
});

export const createRoom = (recipient) => ({
  type: CREATE_ROOM,
  recipient
});

export const bindEmptyRoom = (conversation) => ({
  type: BIND_EMPTY_ROOM,
  conversation
});

export const deleteRoom = (conversation) => ({
  type: DELETE_ROOM,
  conversation
});
