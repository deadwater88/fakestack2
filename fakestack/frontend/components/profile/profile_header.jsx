import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck} from 'react-icons/lib/fa/';
import ProfilePictureContainer from './profile_picture_container';



class ProfileHeader extends React.Component {
  constructor(props){
    super(props);
    this.uploadCoverPic = this. uploadCoverPic.bind(this);
    this.profileNavs = [["timeline", "Timeline"],
                        ["about/overview", "About"],
                        ["friends", "Friends"],
                        ["photos", "Photos"]];
    this.friendsButtonContent = this.friendsButtonContent.bind(this);
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

  handleFriendClick(e){
    e.preventDefault();
    const { currentUserProfile, viewedUserProfile} = this.props;
    let viewedId = viewedUserProfile.id;
    switch (true) {
      case currentUserProfile.friends.includes(viewedId):
        return "Do Nothing";
      case currentUserProfile.requesters.includes(viewedId):
        this.acceptFriending(viewedId);
        return "Accept Request";
      case currentUserProfile.recipients.includes(viewedId):
        return "Do Nothing";
      default:
        this.createFriending(viewedId);
        return  "Create Request";
    }
  }

  friendsButtonContent() {
    const { currentUserProfile, viewedUserProfile} = this.props;
    let viewedId = viewedUserProfile.id;
    switch (true) {
      case currentUserProfile.friends.includes(viewedId):
        return <div> <FaCheck/> CheckMark Friends </div>;
      case currentUserProfile.requesters.includes(viewedId):
        return <div> <FaUserPlus/> Accept Friend Request </div>;
      case currentUserProfile.recipients.includes(viewedId):
        return  <div> <FaUserPlus/> Friend Request Sent </div>;
      default:
        return (<div> <FaUserPlus/> Add Friend </div>);
    }
  }

  render(){
    const {uploadProfilePic, currentUserProfile, viewedUserProfile} = this.props;
    const coverImgUrl = currentUserProfile.coverImgUrl;
    const isSelf = currentUserProfile.id === viewedUserProfile.id;
    const editCheck = isSelf ? {}: {display: "none"};
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
            <div id="profileButtonsHeader">
              {isSelf ? "" : (<button className="headerButton" onClick= {this.handleFriendClick}>
                {this.friendsButtonContent()}
              </button>)
              }
              <Link to={`/profile/${currentUserProfile.id}/about/overview`}>
                <button className="headerButton" style={editCheck} >
                  <FaPencil/>
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
    );
  }
}

export default ProfileHeader;
