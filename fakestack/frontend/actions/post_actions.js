import * as PostAPIUtil from "../utils/post_api_util";

import {fetchComments, fetchUserRelevantComments} from './comment_actions';
import {receiveNotice, RECEIVE_NOTICE} from './notice_actions';


export const RECEIVE_POST = 'RECEIVE_POST';

export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const REMOVE_POST = 'REMOVE_POST';

export const fetchPosts = (userId) => dispatch => {
  return PostAPIUtil.fetchPosts(userId).then(
    (res => {
      dispatch(receivePosts(res));
      dispatch(fetchUserRelevantComments(userId));
    }),
    err => dispatch(receiveNotice(err.responseJSON))
  );
};


export const fetchPost = (postId) => dispatch => {
  return PostAPIUtil.fetchPost(postId).then(
    (res => {
      dispatch(receivePost(res));
    }),
    err => dispatch(receiveNotice(err.responseJSON))
  );
};

export const publishPost = (post) => dispatch => {
  return PostAPIUtil.publishPost(post).then(
    (res => {
      return dispatch(receivePost(res));
    }),
    err => dispatch(receiveNotice(err.responseJSON))
  );
};

export const deletePost = (postId) => dispatch => {
  return PostAPIUtil.deletePost(postId).then(
    (res => {
      return dispatch(removePost(res));
    }),
    err => dispatch(receiveNotice(err.responseJSON))
  );
};



const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});
const removePost = (post) => ({
  type: REMOVE_POST,
  post
});
