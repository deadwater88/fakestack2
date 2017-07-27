import React from 'react';
import ProfileIcon from '../profile/profile_icon';
import {FaClose} from 'react-icons/lib/fa/';
import ReactDOM from 'react-dom';
class MessagingRoom extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: "", recipient: props.conversation.recipient, message: ""};
    this.filter = this.filter.bind(this);
    this.loadConversation = this.loadConversation.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }
  componentDidMount(){

  }

  updateMessage(e){
    e.preventDefault();
    this.setState({message: e.target.value});
  }

  submitMessage(e){
    let input = ReactDOM.findDOMNode(this.refs.messageInput);
    e.preventDefault();
    let data = {recipient_id: this.state.recipient.id};
    let message = {content: input.value};
    message.author_id = this.props.currentUserProfile.id;
    message.timeStamp = Date.now();
    data.message = message;
    this.props.sendMessage(data);
    this.setState({message: ""});
  }

  loadConversation(recipient){
    let {timeStamp} = this.props.conversation;
    return (e) => {
    e.preventDefault();
    let conversation = {recipient, timeStamp};
    conversation.recipient = recipient;
    this.props.bindEmptyRoom(conversation);
    };
  }

  deleteRoom(e){
    e.preventDefault();
    let {recipient, timeStamp} = this.props.conversation;
    let conversation = {recipient, timeStamp};
    this.props.deleteRoom(conversation);
  }
  filter(e){
    e.preventDefault();
    this.setState({query: e.target.value});
  }

  renderCandidates(){
    let {friends} = this.props;
    let re = new RegExp(this.state.query, "i");
    let candidates = friends.filter((friend)=>{
      let name = `${friend.firstName} ${friend.lastName}`;
      return name.match(re);
    }).slice(0,5);
    return (
      <div className="messagingCandidatesList">
        {candidates.map((friend, idx)=>{
          return (
            <div className="messagingCandidate boldBlack"
                       key={"friend" + idx}
                   onClick={this.loadConversation(friend)}>
                   <ProfileIcon imgUrl={friend.profileImgUrl} />
                   {`${friend.firstName} ${friend.lastName}`}
            </div>);
        })}
      </div>
    );
  }

  renderConversation(){
    let {recipient} = this.state;
    let {conversations} = this.props;
    let conversation = (conversations[recipient && recipient.id]) ? conversations[recipient.id].messages : [];
    return (
      <div className="conversation-content bottomBorderGray">
        {conversation.map((message,idx)=> {
          return (<div className="content" key={idx + "message"}>
            {message.content}
          </div>);
        })}
      </div>
    );
  }

  renderInput(){
    return (
      <form onSubmit={this.loadconversation} className="messageInputContainer bottomBorderGray">
        <label> To:
          <input type="text" onChange={this.filter} >
          </input>
        </label>
        {this.state.query === "" ? "" : this.renderCandidates()}
      </form>
    );
  }

  render(){
    let {recipient} = this.state;
    return (
      <div className="messaging-room">
        <div className="messaging-header room">
          {recipient ? `${recipient.firstName} ${recipient.lastName}` : "New Message"}
          <div title={"Press Esc to Close"} onClick={this.deleteRoom}>
            <FaClose className="cIcon"/>
          </div>
        </div>
        {recipient ? "" : this.renderInput()}
        {this.renderConversation()}
        <form className="conversation-form" onSubmit={this.submitMessage}>
           {recipient ? (<input ref="messageInput" type="text" onChange={this.updateMessage}
            value={this.state.message} placeholder="Type a message...">
          </input>) : ""}
        </form>
      </div>);

  }


}

export default MessagingRoom;
