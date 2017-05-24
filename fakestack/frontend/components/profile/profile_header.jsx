import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FaChevronDown, FaPencil, FaCamera} from 'react-icons/lib/fa/';
import ProfilePictureContainer from './profile_picture_container';



class ProfileHeader extends React.Component {
  constructor(props){
    super(props);
    this.uploadCoverPic = this. uploadCoverPic.bind(this);
    this.profileNavs = [["timeline", "Timeline"],
                        ["about/overview", "About"],
                        ["friends", "Friends"],
                        ["photos", "Photos"]];
  }


  uploadCoverPic(e){
    const uploadPic = this.props.uploadPic;
    const userId = this.props.currentUserProfile.id;
    window.cloudinary.openUploadWidget(window.cloudinary_options,
    (error, images)=>{
      if (error === null) {
        uploadPic({cover_img_url: images[0].url}, userId);
      } else {
      }
    });
  }

  render(){

    const {uploadProfilePic, currentUserProfile, viewedUserProfile} = this.props;
    const coverImgUrl = currentUserProfile.coverImgUrl;
    const editCheck = currentUserProfile.id === viewedUserProfile.id ? {}: {display: "none"};
    return (
        <div id="profileHeader">
          <div id="profilePictureContainer">
            <ProfilePictureContainer imgUrl={viewedUserProfile.profileImgUrl} className="profileImg"/>
          </div>
          <div id="coverImgHolder">
            <FaCamera id="editCoverCamera" style={editCheck}/>
            <div onClick={this.uploadCoverPic} id="editCoverButton" style={editCheck}>
              Add Cover Photo
            </div>
            { coverImgUrl === "" ? <div id="coverImg"></div> : <img src={viewedUserProfile.coverImgUrl} id="coverImg"/>}
            <h1> {`${viewedUserProfile.firstName} ${viewedUserProfile.lastName}`} </h1>
          </div>
          <div id="profileNav">
            {this.profileNavs.map((nav, idx)=>(
              <NavLink className="headerLink" key={idx + "headernav"}
                to={`/profile/${viewedUserProfile.id}/${nav[0]}`}
                activeClassName="headerLink selected"
                activeStyle={{ color: 'black' }}>
                {nav[1]}
              </NavLink>
            ))}
            <a className="NavLink">
              More
              <FaChevronDown/>
            </a>
          </div>
            <Link to={`/profile/${currentUserProfile.id}/about/overview`}>
              <button id="headerButton" style={editCheck} >
                <FaPencil/>
                Edit Profile
              </button>
            </Link>
        </div>
    );
  }
}

export default ProfileHeader;
