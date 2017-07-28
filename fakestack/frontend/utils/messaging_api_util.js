
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


export const partitionMessages = (messages) => {
  let output = [[messages[0]]];
  for (let i = 1; i < messages.length; i++ ){
    let lastGroup = output[output.length - 1];
    if (lastGroup[0].author_id === messages[i].author_id ){
      lastGroup.push(messages[i]);
    } else {
      output.push([messages[i]]);
    }
  }
  return output;
};
