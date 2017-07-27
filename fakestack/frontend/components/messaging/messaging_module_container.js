import { connect } from 'react-redux';
import { sendMessage, openRoom, createNewRoom, fetchConversations } from '../../actions/messaging_actions';
import values from 'lodash/values';
import MessagingModule from './messaging_module';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  conversations: state.conversations,
  activeConversations: processConversations(state.activeConversations)

});

const mapDispatchToProps = (dispatch) => ({
  sendMesage: (recipient_id, data) => sendMessage(recipient_id, data),
  openRoom: (recipient_id) => dispatch(openRoom(recipient_id)),
  createNewRoom: () => dispatch(createNewRoom()),
  fetchConversations: () => dispatch(fetchConversations())
});


function processConversations(conversations) {
  return values(conversations).sort((conversation)=>{
    return conversation.timeStamp;
  });
}

export default connect(mapStateToProps,
               mapDispatchToProps)(MessagingModule);
