import React from 'react';
import {Link} from 'react-router-dom';

class ProfileHeader extends React.Component {
  constructor(props){
    super(props);
    this.testimage = "https://lumiere-a.akamaihd.net/v1/images/Death-Star-II_b5760154.jpeg?region=0%2C68%2C2160%2C1080";
  }

  render(){
    return (
      <div id="profileHeader">
        <img src={this.testimage} id="coverImg"/>
        <div id="profileNav">
          <Link to="/"> Timeline </Link>
          <Link to="About"> About </Link>
          <Link to="Friends"> Friends </Link>
          <Link to="Photos"> Photos </Link>
          <Link to="More"> More </Link>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
