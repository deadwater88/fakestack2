import * as ProfileAPIUtil from "../utils/profile_api_util";


export const RECEIVE_CURRENT_USER_PROFILE = 'RECEIVE_CURRENT_USER_PROFILE';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const uploadProfilePic = (profile_img_url, userId)=> dispatch => {
  return ProfileAPIUtil.uploadProfilePic(profile_img_url, userId).then(
    res => dispatch(receiveCurrentUserProfile(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const receiveCurrentUserProfile = currentUserProfile => ({
  type: RECEIVE_CURRENT_USER_PROFILE,
  currentUserProfile
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
