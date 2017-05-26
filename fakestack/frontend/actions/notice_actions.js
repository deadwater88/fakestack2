import * as NoticeAPIUtil from "../utils/notice_api_util";

export const RECEIVE_NOTICE = 'RECEIVE_NOTICE';

export const RECEIVE_NOTICES = 'RECEIVE_NOTICES';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveNotice = (notice) => ({
  type: RECEIVE_NOTICE,
  notice
});

export const receiveNotices = (notices) => ({
  type: RECEIVE_NOTICES,
  notices
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})
export const clearErrors = () => ({
  type: CLEAR_ERRORS
})


export const fetchNotices = () => dispatch => {
    return NoticeAPIUtil.fetchNotices().then(
      res => {
        dispatch(receiveNotices(res));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
  
