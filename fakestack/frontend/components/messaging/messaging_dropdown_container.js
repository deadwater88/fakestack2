import { connect } from 'react-redux';
import { sendMessage, openRoom, createNewRoom, fetchConversations } from '../../actions/messaging_actions';
import MessagingDropdown from './messaging_dropdown';
import values from 'lodash/values';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  conversations: arrayConversations(state.conversations, state.currentUserProfile)
});

const mapDispatchToProps = (dispatch) => ({
  sendMesage: (recipient_id, data) => sendMessage(recipient_id, data),
  openRoom: (recipient_id) => dispatch(openRoom(recipient_id)),
  createNewRoom: () => dispatch(createNewRoom()),
  fetchConversations: () => dispatch(fetchConversations())
});

function arrayConversations(conversations, currentUserProfile) {
  let output = [];
  let currentUserId = currentUserProfile.id;
  let {friends} = currentUserProfile;
  values(conversations).forEach((conversation)=>{
    let [id1, id2] = conversation.participants;
    let recipient_id = id1 === currentUserId ? id2 : id1;
    conversation.recipient = friends[recipient_id];
    output.push(conversation);
  });
  return output;
}

export default connect(mapStateToProps,
               mapDispatchToProps)(MessagingDropdown);
