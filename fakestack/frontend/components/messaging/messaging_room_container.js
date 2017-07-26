import { connect } from 'react-redux';
import { sendMessage, openRoom, createNewRoom, fetchConversations } from '../../actions/messaging_actions';
import MessagingRoom from './messaging_room';
import values from 'lodash/values';


const mapStateToProps = (state, ownProps={}) =>({
  currentUserProfile: state.currentUserProfile,
  conversations: processedConversations(state.conversations, state.currentUserProfile),
  recipient: ownProps.recipient
});

const mapDispatchToProps = (dispatch) => ({
  sendMesage: (recipient_id, data) => sendMessage(recipient_id, data),
  openRoom: (recipient_id) => dispatch(openRoom(recipient_id)),
  createNewRoom: () => dispatch(createNewRoom())
});

function processedConversations(conversations, currentUserProfile) {
  let output = {};
  let currentUserId = currentUserProfile.id;
  let {friends} = currentUserProfile;
  values(conversations).forEach((conversation)=>{
    let [id1, id2] = conversation.participants;
    let recipient_id = id1 === currentUserId ? id2 : id1;
    conversation.recipient = friends[recipient_id];
    output[recipient_id] = conversation;
  });
  return output;
}

export default connect(mapStateToProps,
               mapDispatchToProps)(MessagingRoom);
