import React from 'react';
import ProfileIcon from '../profile/profile_icon';
import MessagingRoomContainer from './messaging_room_container';
import {setupMessagingChannel} from '../../actions/messaging_actions';

class MessagingModule extends React.Component {
  constructor(props){
    super(props);
    this.state = {conversations: {}};
  }

  componentDidMount(){
    this.props.fetchConversations();
    setupMessagingChannel(store);
  }

  createEmptyRoom(e){
    e.preventDefault();
    this.props.creatEmptyRoom();
  }

  bindRoom(timeStamp){
    return (recipient) =>{
      return (e)=> {
        e.preventDefault();
        this.props.bindEmptyRoom({recipient, timeStamp});
      };
    };
  }

  openRoom(e){
    e.preventDefault();
    this.props.loadRoom();
  }

  render(){
    let {activeConversations} = this.props;
    return (
      <div id="messaging-bar">
        {activeConversations.map((conversation)=> {
          return <MessagingRoomContainer conversation={conversation} key={conversation.timeStamp + `${conversation.recipient}`} />;
        })}
      </div>
    );
  }
}

export default MessagingModule;
