import React from 'react';
import ProfileIcon from '../profile/profile_icon';
import MessagingRoomContainer from './messaging_room_container';
import {setupMessagingChannel} from '../../actions/messaging_actions';

class MessagingModule extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.fetchConversations();
    setupMessagingChannel(store);
  }

  createNewRoom(e){
    e.preventDefault();
    this.props.creatNewRoom();
  }

  openRoom(e){
    e.preventDefault();
    this.props.loadRoom();
  }

  render(){
    return (
      <div id="messaging-bar">
        <MessagingRoomContainer/>
      </div>
    );
  }
}

export default MessagingModule;
