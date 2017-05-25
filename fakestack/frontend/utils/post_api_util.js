export const fetchPosts = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/posts?user_id=${userId}`
  });
};


export const publishPost = (post) => {
  return $.ajax({
    method: "POST",
    url: `api/posts`,
    data: post
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/posts/${postId}`
  });
};
