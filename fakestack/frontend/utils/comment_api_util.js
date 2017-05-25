
export const fetchComments = (parent_id, parent_type) => {
  return $.ajax({
    method: "GET",
    url: `api/comments?parent_id=${parent_id}&parent_type=${parent_type}`
  });
};

export const fetchUserRelevantComments = (userId) => {
  return $.ajax({
    method:"GET",
    url: `api/comments?user_id=${userId}`
  });
};

export const publishComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `api/comments`,
    data: {comment}
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${commentId}`
  });
};
