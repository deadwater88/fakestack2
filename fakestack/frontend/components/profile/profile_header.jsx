import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FaChevronDown, FaPencil} from 'react-icons/lib/fa/';
import ProfilePictureContainer from './profile_picture_container';



class ProfileHeader extends React.Component {
  constructor(props){
    super(props);

    this.profileNavs = [["timeline", "Timeline"],
                        ["edit", "About"],
                        ["friends", "Friends"],
                        ["photos", "Photos"]]
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
            {this.profileNavs.map((nav, idx)=>(
              <NavLink className="headerLink" key={idx + "headernav"}
                to={`/profile/${nav[0]}`}
                activeClassName="headerLink selected"
                activeStyle={{ color: 'black' }}>
                {nav[1]}
                <span className="selectorChevron"></span>
              </NavLink>
            ))}
            <Link className="NavLink"
              to="/profile/more">
              More
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
