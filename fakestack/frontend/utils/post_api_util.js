export const fetchPosts = (userId, type) => {
  return $.ajax({
    method: "GET",
    url: `api/posts?user_id=${userId}&type=${type}`
  });
};



export const fetchPost = (postId) => {
  return $.ajax({
    method: "GET",
    url: `api/posts/${postId}`
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
