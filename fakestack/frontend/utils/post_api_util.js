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
