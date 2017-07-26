import React from 'react';


class MessagingRoom extends React.Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  submitConversation(e){
    e.preventDefault();

  }

  renderInput(){
    return (
      <form onSubmit={this.loadconversation} className="messageInputContainer bottomBorderGray">
        <label> To:
          <input type="text" onChange={this.filter}>
          </input>
        </label>
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
        <div className="conversation-content">
          Conversation goes here
        </div>
        <form onSubmit={this.submitConversation}>
          <input type="text">

          </input>
        </form>
      </div>
    );

  }


}

export default MessagingRoom;
