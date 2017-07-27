import { connect } from 'react-redux';
import { sendMessage, openRoom, createNewRoom, fetchConversations } from '../../actions/messaging_actions';
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
  openRoom: (recipient_id) => dispatch(openRoom(recipient_id)),
  createNewRoom: () => dispatch(createNewRoom())
});


export default connect(mapStateToProps,
               mapDispatchToProps)(MessagingRoom);
