export const createFriending = (viewedId) => {
  return $.ajax({
    method: "POST",
    url: `api/friendings`,
    data: {Friending:  {recipient_id: viewedId}}
  });
};


export const acceptFriending = (viewedId) => {
  return $.ajax({
    method: "PATCH",
    url: `api/posts${viewedId}`,
    data: {Friending: {requester_id: viewedId}, approved: true}
  });
};

export const deleteFriending = (viewedId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/posts/${viewedId}`
  });
};
