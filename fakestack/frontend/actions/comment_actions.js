import * as CommentAPIUtil from "../utils/comment_api_util";

import {receivePost} from './post_actions';
import {receiveNotice, RECEIVE_NOTICE} from './notification_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const RECEIVE_COMMENTS = "RECEIVE_POSTS";

export const RECEIVE_RELEVANT_COMMENTS = "RECEIVE_RELEVANT_COMMENTS";

export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const fetchComments = (parent_id, parent_type) => dispatch => {
  return CommentAPIUtil.fetchComments(parent_id, parent_type).then(
    (res => {
      dispatch(receiveComments(res));
    }),
    err => dispatch(receiveNotice(err.responseJSON))
  );
};

export const fetchUserRelevantComments = (userId) => dispatch => {
  return CommentAPIUtil.fetchUserRelevantComments(userId).then(
    (res=> {
      dispatch(receiveRelevantComments(res));

    })
  );
};

export const publishComment = (comment) => dispatch => {
  return CommentAPIUtil.publishComment(comment).then(
    (res => {
      dispatch(receiveComment(res.comment));
      if (res.comment.parentType == "Post") {
          dispatch(receivePost(res.post));
      } else {
          dispatch(receiveComment(res.parent));
      }


    }),
    err => dispatch(receiveNotice(err.responseJSON))
  );
};

export const deleteComment = (commentId) => dispatch => {
  return CommentAPIUtil.deleteComment(commentId).then(
    (res => {
      return dispatch(removeComment(res));
    }),
    err => dispatch(receiveNotice(err.responseJSON))
  );
};

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});


const receiveRelevantComments = (comments) => ({
  type:RECEIVE_RELEVANT_COMMENTS,
  comments
});

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});
