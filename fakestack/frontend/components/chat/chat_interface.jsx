import React from 'react';


class ChatInterface extends React.Component {
  constructor(props){
    super(props);
    this.connect = this.connect.bind(this);

  }

  connect(e){
    e.preventDefault();
    window.dispatcher = new WebSocketRails('localhost:3000/websocket');
    window.dispatcher.on_open = (data)=>{
      console.log("Connection has been established: ", data);
    }
  }

  render(){

    return (<button onClick={this.connect}>
      Connect!
    </button>)

  }

}

export default ChatInterface;
