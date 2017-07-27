import { connect } from 'react-redux';
import { sendMessage, openRoom, createNewRoom, fetchConversations } from '../../actions/messaging_actions';
import MessagingDropdown from './messaging_dropdown';
import values from 'lodash/values';
import {processedConversations} from '../../utils/messaging_api_util';


const mapStateToProps = (state) =>({
  currentUserProfile: state.currentUserProfile,
  conversations: values(processedConversations(state.conversations, state.currentUserProfile))
});

const mapDispatchToProps = (dispatch) => ({
  sendMesage: (recipient_id, data) => sendMessage(recipient_id, data),
  openRoom: (recipient_id) => dispatch(openRoom(recipient_id)),
  createNewRoom: () => dispatch(createNewRoom()),
  fetchConversations: () => dispatch(fetchConversations())
});

export default connect(mapStateToProps,
               mapDispatchToProps)(MessagingDropdown);
