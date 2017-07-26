import React from 'react';
import ProfileIcon from '../profile/profile_icon';
import MessagingRoom from './messaging_room';

class MessagingModule extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    // this.props.fetchConversations();
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
        <MessagingRoom/>
      </div>
    );
  }
}

export default MessagingModule;
