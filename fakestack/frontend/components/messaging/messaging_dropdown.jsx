import React from 'react';
import ProfileIcon from '../profile/profile_icon';
import { recentDateFormat } from '../../utils/date_format';

class MessagingDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {visible: false};
    this.updateReadStatus = this.updateReadStatus.bind(this);
    this.createEmptyRoom = this.createEmptyRoom.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  componentWillMount(){
  }

  createEmptyRoom(e){
    e.preventDefault();
    this.props.createEmptyRoom();
  }


  createRoom(recipient){
    return (e)=> {
    e.preventDefault();
    this.props.createRoom(recipient);
    };
  }
  updateReadStatus(){

  }

  render(){
    let { conversations } = this.props;
    conversations = conversations || [];
    conversations = conversations.sort((c2, c1) => c1.messages[c1.messages.length - 1].timeStamp - c2.messages[c2.messages.length - 1].timeStamp);
    return (
      <div className="dropDown-content messaging" >
        <div className="messaging-header">
          <h4> Recent Messages</h4>
          <div className="messaging-header-options">
            <a onClick={this.createEmptyRoom} className="nonBold">
              New message
            </a>
          </div>
        </div>
        <ul className="conversations">
          {conversations.map((conversation)=>{
            let lastMessage = conversation.messages[conversation.messages.length - 1];
            let timestamp = recentDateFormat(lastMessage.timeStamp);
            let recipient = conversation.recipient;
            let name = `${recipient.firstName} ${recipient.lastName}`;
            return (
            <div key={lastMessage.timeStamp} className="conversationItem" onClick={this.createRoom(recipient)}>
              <div className="dropDownProfileImg">
                <ProfileIcon imgUrl={recipient.profileImgUrl}/>
              </div>
              <div className="lastMessageContainer">
                <div className="lastMessageContent">
                  <div className= "lm-top">
                    <h4 className="lm-name medium-bold-black heavybold">
                      {name}
                    </h4>
                    <div className="lm-timestamp plain-text gray small">
                      {timestamp}
                    </div>
                  </div>
                  <div className="lm-bottom">
                    <p className="lm-content plain-text small"> {lastMessage.content} </p>
                    <div title={conversation.read ? "Mark as Read" : "Mark as Unread"} className="readIndicator">
                      <input type='radio' onChange={this.updateReadStatus} checked={true}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MessagingDropdown;
