
export const sendMessage = (recipient_id, data) => {
  return App.room.speak({recipient_id, data});
};

export const fetchConversations = () => {
  return $.ajax({
    method: "GET",
    url: `api/conversations`,
  });
};
