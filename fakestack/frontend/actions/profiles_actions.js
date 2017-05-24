import * as ProfileAPIUtil from "../utils/profile_api_util";
import * as UserApiUtil from '../utils/user_api_util';

export const RECEIVE_CURRENT_USER_PROFILE = 'RECEIVE_CURRENT_USER_PROFILE';

export const RECEIVE_VIEWED_PROFILE = 'RECEIVE_VIEWED_PROFILE';

export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';

export const RECEIVE_RELEVANT_USERS = 'RECEIVE_RELEVANT_USERS'

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
    )
  });

};
export const fetchViewedProfile = (id) => dispatch => {
  return ProfileAPIUtil.fetchUser(id).then(
    res => dispatch(receiveViewedProfile(res)),
    err => dispatch(receiveProfileErrors(err.responseJSON))
  );
};

export const fetchRelevantUsers = (id) => dispatch => {
    return UserApiUtil.fetchRelevantUsers(id).then(
      res => dispatch(receiveRelevantUsers(res)),
      err => dispatch(receiveProfileErrors(err.responseJSON))
    );
  };


export const receiveRelevantUsers = (relevant_users) => ({
  type: RECEIVE_RELEVANT_USERS,
  relevant_users
})

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
