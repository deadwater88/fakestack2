import React from 'react';
import ProfileIcon from '../profile/profile_icon';

class MessagingDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {visible: false};
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
    const { conversations } = this.props;
    return (
      <div className="dropDown-content messaging" >
        <div className="messaging-header">
          <h4> Recent </h4>
          <div className="messaging-header-options">
            <a onClick={this.createNewRoom}>
              New message
            </a>
          </div>
        </div>
        <ul className="conversations">
          {conversations.map((conversation)=>{
            let lastMessage = conversation.messages[conversation.messages.length - 1];
            let timestamp = lastMessage.timestamp;
            let recipient = conversation.recipient;
            return (
            <div key={"conversation" + conversation.recipient.id} className="conversationItem">
              <div className="dropDownProfileImg">
                <ProfileIcon imgUrl={recipient.profileImgUrl}/>
              </div>
              <div className="lastMessageContainer">
                <div className="lastMessage-content">
                  <div className= "lm-top">
                    <h4 className="LM-name medium-bold-black">
                      {conversation.recipient.name}
                    </h4>
                    <div className="lm-timestamp plain-text gray">
                      {timestamp}
                    </div>
                  </div>
                  <div className="lm-bottom">
                    <p className="LM-content plain-text"> lastMessage.content </p>
                    <div title={this.conversation.read ? "Mark as Read" : "Mark as Unread"} className="readIndicator">
                      <input type='radio' checked={this.conversation.read}> </input>
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
