import { connect } from 'react-redux';
import { bindEmptyRoom, deleteRoom } from '../../actions/active_conversations_actions';
import { sendMessage } from '../../actions/messaging_actions';
import MessagingRoom from './messaging_room';
import {processedConversations} from '../../utils/messaging_api_util';
import values from 'lodash/values';


const mapStateToProps = (state, ownProps={}) =>({
  friends: values(state.currentUserProfile.friends),
  conversations: processedConversations(state.conversations, state.currentUserProfile),
  recipient: ownProps.recipient,
  currentUserProfile: state.currentUserProfile
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (data) => sendMessage(data),
  deleteRoom: (conversation) => dispatch(deleteRoom(conversation)),
  bindEmptyRoom: (conversation) => dispatch(bindEmptyRoom(conversation))
});


export default connect(mapStateToProps,
               mapDispatchToProps)(MessagingRoom);
