
export const sendMessage = (data) => {
  return App.room.speak(data);
};

export const fetchConversations = () => {
  return $.ajax({
    method: "GET",
    url: `api/conversations`,
  });
};
