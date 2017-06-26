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
    this.handleFriendClick = this.handleFriendClick.bind(this);
  }



  uploadCoverPic(e){
    e.preventDefault();
    const uploadPic = this.props.uploadPic;
    const userId = this.props.currentUserProfile.id;
    window.cloudinary.openUploadWidget(window.cloudinary_options,
    (error, images)=>{
      if (error === null) {
        uploadPic({cover_img_url: images[0].url}, userId);
      }
    });
  }

  handleFriendClick(e){
    e.preventDefault();
    const { currentUserProfile, viewedUserProfile} = this.props;
    let viewedId = viewedUserProfile.id;
    switch (true) {
      case !!currentUserProfile.friends[viewedId]:
        return "Do Nothing";
      case !!currentUserProfile.requesters[viewedId]:
        this.props.acceptFriending(viewedId);
        return "Accept Request";
      case !!currentUserProfile.recipients[viewedId]:
        return "Do Nothing";
      default:
        this.props.createFriending(viewedId);
        return  "Create Request";
    }
  }

  friendsButtonContent() {
    const { currentUserProfile, viewedUserProfile} = this.props;
    let viewedId = viewedUserProfile.id;
    switch (true) {
      case Object.keys(currentUserProfile.friends).includes(viewedId):
        return <div> <FaCheck/>Friends </div>;
      case !!currentUserProfile.requesters[viewedId]:
        return <div> <FaUserPlus/> Accept Friend Request </div>;
      case !!currentUserProfile.recipients[viewedId]:
        return  <div> <FaUserPlus/> Friend Request Sent </div>;
      default:
        return (<div> <FaUserPlus/> Add Friend </div>);
    }
  }

  render(){
    const {currentUserProfile, viewedUserProfile} = this.props;
    const coverImgUrl = viewedUserProfile.coverImgUrl;
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
            { coverImgUrl === "" ? <div id="coverImg"></div> : <a><img src={viewedUserProfile.coverImgUrl.replace("http:", "https:")} id="coverImg"/></a>}
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
