import React from 'react';


class MessagingRoom extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: "", recipient: props.recipient};
  }

  submitConversation(e){
    e.preventDefault();
  }

  loadConversation(e){
    e.preventDefault(e);
    let recipient = e.target.data;
    this.setState({recipient});
  }

  filter(e){
    e.preventDefault();
  }

  renderCandidates(){
    return (
      <div className="messagingCandidates">

      </div>
    );
  }

  renderInput(){
    return (
      <form onSubmit={this.loadconversation} className="messageInputContainer bottomBorderGray">
        <label> To:
          <input type="text" onChange={this.filter}>
          </input>
        </label>
        {this.state.query === "" ? "" : renderCandidates()}
      </form>
    );
  }

  render(){
    return (
      <div className="messaging-room">
        <div className="messaging-header">
          NewMessage
        </div>
        {this.state.recipient ? "" : this.renderInput()}
        <div className="conversation-content bottomBorderGray">
          Conversation goes here
        </div>
        <form className="conversation-form" onSubmit={this.submitConversation}>
          <input ref="messageInput" type="text" placeholder="Type a message...">
          </input>
        </form>
      </div>);

  }


}

export default MessagingRoom;
