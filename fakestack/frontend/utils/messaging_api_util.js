
import values from 'lodash/values';

export const sendMessage = (data) => {
  return App.room.speak(data);
};

export const fetchConversations = () => {
  return $.ajax({
    method: "GET",
    url: `api/conversations`,
  });
};

export const processedConversations = (conversations, currentUserProfile) => {
  let output = {};
  let currentUserId = currentUserProfile.id;
  let {friends} = currentUserProfile;
   values(conversations).forEach((conversation)=>{
    let [id1, id2] = conversation.participants.split("-");
    let recipient_id = id1 == currentUserId ? id2 : id1;
    conversation.recipient = friends[recipient_id];
    output[recipient_id] = conversation;
  });
  return output;
};


export const processMessages = (messages) => {
  let output = [];
};
