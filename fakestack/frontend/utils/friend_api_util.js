export const createFriending = (viewedId) => {
  return $.ajax({
    method: "POST",
    url: `api/friendings`,
    data: {friending:  {recipient_id: viewedId}}
  });
};


export const acceptFriending = (viewedId) => {
  return $.ajax({
    method: "PATCH",
    url: `api/friendings/${viewedId}`,
    data: {friending: {requester_id: viewedId, approved: true}}
  });
};

export const deleteFriending = (viewedId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/friendings/${viewedId}`
  });
};
