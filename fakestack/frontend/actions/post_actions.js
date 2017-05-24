import * as PostAPIUtil from "../utils/post_api_util";

import {fetchComments, fetchUserRelevantComments} from './comment_actions';
import {receiveNotice, RECEIVE_NOTICE} from './notification_actions';

export const RECEIVE_POST = 'RECEIVE_POST';

export const RECEIVE_POSTS = "RECEIVE_POSTS";


export const fetchPosts = (userId) => dispatch => {
  return PostAPIUtil.fetchPosts(userId).then(
    (res => {
      dispatch(receivePosts(res));
      dispatch(fetchUserRelevantComments(userId));
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



const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});
