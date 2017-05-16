import React from 'react';

class HeaderNav extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }




  render(){
    return <button onClick={this.handleClick}>Log Out</button>;
  }
}


export default HeaderNav;
