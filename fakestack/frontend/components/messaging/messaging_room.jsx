import React from 'react';


class MessagingRoom extends React.Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  renderInput(){
    return (
      <form onSubmit={this.loadconversation}>
        <input type="text" onChange={this.filter}>
        </input>
      </form>
    );
  }

  render(){
    return (
      <div className="messagingRoom">
        <div className="messaging-header">
          Hello
        </div>
        {this.state.recipient ? "" : this.renderInput()}
      </div>
    );

  }


}

export default MessagingRoom;
