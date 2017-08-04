import * as ProfileAPIUtil from "../utils/profile_api_util";
import * as FriendAPIUtil from '../utils/friend_api_util';
import * as UserApiUtil from '../utils/user_api_util';

export const RECEIVE_CURRENT_USER_PROFILE = 'RECEIVE_CURRENT_USER_PROFILE';

export const RECEIVE_VIEWED_PROFILE = 'RECEIVE_VIEWED_PROFILE';

export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';

export const RECEIVE_RELEVANT_USERS = 'RECEIVE_RELEVANT_USERS';

export const RECEIVE_CURRENT_USER_PROP = 'RECEIVE_CURRENT_USER_PROP';

export const RECEIVE_VIEWED_PROFILE_PROP = 'RECEIVE_VIEWED_PROFILE_PROP';

export const RECEIVE_PROP = 'RECEIVE_PROP';

export const uploadPic = (prop, userId)=> dispatch => {
  return ProfileAPIUtil.uploadPic(prop, userId).then(
    (res => {
      dispatch(receiveCurrentUserProfile(res));
      dispatch(receiveViewedProfile(res));
    }),
    err => dispatch(receiveProfileErrors(err.responseJSON))
  );
};

export const updateProp = (prop, userId) => dispatch => {
  return ProfileAPIUtil.updateProp(prop, userId).then(
    (res => {
      dispatch(receiveCurrentUserProfile(res));
      dispatch(receiveViewedProfile(res));
    }),
    err => dispatch(receiveProfileErrors(err.responseJSON))
  );
};
export const updateProfileProp = (prop, url) => dispatch => {
  return ProfileAPIUtil.updateProfileProp(prop, url).then(
    (res => {
      dispatch(receiveCurrentUserProp(res));
      dispatch(receiveViewedProfileProp(res));
    }),
    err => dispatch(receiveProfileErrors(err.responseJSON))
  );
};

export const fetchCurrentUser = (id) => dispatch => {
  ProfileAPIUtil.fetchUser(id).then((res => {
    dispatch(receiveCurrentUserProfile(res));
    dispatch(receiveViewedProfile(res));
  }),
    err => dispatch(receiveProfileErrors(err.responseJSON))
  ).then(()=>{
    UserApiUtil.fetchRelevantUsers(id).then(
      res => dispatch(receiveRelevantUsers(res)),
      err => dispatch(receiveProfileErrors(err.responseJSON))
    );
  });
};

export const fetchRelevantUsers = (query) => dispatch => {
    return UserApiUtil.fetchRelevantUsers(query).then(
      res => dispatch(receiveRelevantUsers(res)),
      err => dispatch(receiveProfileErrors(err.responseJSON))
    );
  };

export const fetchViewedProfile = (id) => dispatch => {
  return ProfileAPIUtil.fetchUser(id).then(
    res => dispatch(receiveViewedProfile(res)),
    err => dispatch(receiveProfileErrors(err.responseJSON))
  );
};

export const acceptFriending = (viewedId) => dispatch => {
    return FriendAPIUtil.acceptFriending(viewedId).then(
      res => {
        dispatch(receiveCurrentUserProfile(res));
      },
      err => dispatch(receiveProfileErrors(err.responseJSON))
    );
  };


export const createFriending = (viewedId) => dispatch => {
    return FriendAPIUtil.createFriending(viewedId).then(
      res => {
        return dispatch(receiveProp(res));},
      err => dispatch(receiveProfileErrors(err.responseJSON))
    );
  };

  export const deleteFriending = (viewedId) => dispatch => {
      return FriendAPIUtil.deleteFriending(viewedId).then(
        res => {
          return dispatch(receiveCurrentUserProfile(res));},
        err => dispatch(receiveProfileErrors(err.responseJSON))
      );
    };

export const receiveProp = (prop) => ({
  type: RECEIVE_PROP,
  prop
});


export const receiveRelevantUsers = (relevant_users) => ({
  type: RECEIVE_RELEVANT_USERS,
  relevant_users
});

export const receiveCurrentUserProfile = currentUserProfile => ({
  type: RECEIVE_CURRENT_USER_PROFILE,
  currentUserProfile
});

export const receiveProfileErrors = errors => ({
  type: RECEIVE_PROFILE_ERRORS,
  errors
});
export const receiveViewedProfile = viewedUserProfile => ({
  type: RECEIVE_VIEWED_PROFILE,
  viewedUserProfile
});

export const receiveCurrentUserProp = (prop) => ({
  type: RECEIVE_CURRENT_USER_PROP,
  prop
});

export const receiveViewedProfileProp = (prop) => ({
  type: RECEIVE_VIEWED_PROFILE_PROP,
  prop
});
