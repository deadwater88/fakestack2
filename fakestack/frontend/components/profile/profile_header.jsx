import React from 'react';
import {Link} from 'react-router-dom';
import {FaChevronDown, FaPencil} from 'react-icons/lib/fa/';
import ProfilePictureContainer from './profile_picture_container';



class ProfileHeader extends React.Component {
  constructor(props){
    super(props);
    this.testimage = "https://lumiere-a.akamaihd.net/v1/images/Death-Star-II_b5760154.jpeg?region=0%2C68%2C2160%2C1080";
    this.headShot = "https://assets3.thrillist.com/v1/image/1165873/size/tmg-article_default_mobile;jpeg_quality=20.jpg";
  }


  render(){
    const {uploadProfilePic} = this.props;
    return (
        <div id="profileHeader">
          <div id="profilePictureContainer">
            <ProfilePictureContainer uploadProfilePic={uploadProfilePic} className="profileImg"/>
          </div>
          <div className="shadow"></div>
          <img src={this.testimage} id="coverImg"/>
          <div id="profileNav">
            <Link to="/profile/timeline"> Timeline </Link>
            <Link to="/profile/edit"> About </Link>
            <Link to="/profile/friends"> Friends </Link>
            <Link to="/profile/photos"> Photos </Link>
            <Link to="/profile/more"> More
              <FaChevronDown/>
            </Link>
          </div>
            <Link to="/profile/edit">
              <button id="headerButton">
                <FaPencil/>
                Edit Profile
              </button>
            </Link>
        </div>
    );
  }
}

export default ProfileHeader;
