import React from 'react';
import {Link} from 'react-router-dom';
import {FaChevronDown, FaPencil} from 'react-icons/lib/fa/';


class ProfileHeader extends React.Component {
  constructor(props){
    super(props);
    this.testimage = "https://lumiere-a.akamaihd.net/v1/images/Death-Star-II_b5760154.jpeg?region=0%2C68%2C2160%2C1080";
    this.headShot = "https://assets3.thrillist.com/v1/image/1165873/size/tmg-article_default_mobile;jpeg_quality=20.jpg";
  }

  render(){
    return (
        <div id="profileHeader">
          <a id="profileImg">
            <img src={this.headShot}/>
          </a>
          <div className="shadow"></div>
          <img src={this.testimage} id="coverImg"/>
          <div id="profileNav">
            <Link to="/profile/Timeline"> Timeline </Link>
            <Link to="/profile/About"> About </Link>
            <Link to="/profile/Friends"> Friends </Link>
            <Link to="/profile/Photos"> Photos </Link>
            <Link to="/profile/More"> More
              <FaChevronDown/>
            </Link>
          </div>
          <button id="headerButton">
            <FaPencil/>
            Edit Profile
          </button>
        </div>
    );
  }
}

export default ProfileHeader;
