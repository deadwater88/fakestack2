import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import ProfileIcon from '../profile_icon';
import FriendItemContainer from './friend_item_container';
import {Link} from 'react-router-dom';

class FriendItem extends React.Component {
  constructor(props){
    super(props);
    this.handleFriendClick = this.handleFriendClick.bind(this);
  }


  friendsButtonContent() {
    const { currentUserProfile} = this.props;
    let viewedId = this.props.friend.id;
    switch (true) {
      case currentUserProfile.friends.includes(viewedId):
        return <div> <FaCheck/>Friends </div>;
      case currentUserProfile.requesters.includes(viewedId):
        return <div> <FaUserPlus/> Accept Friend Request </div>;
      case currentUserProfile.recipients.includes(viewedId):
        return  <div> <FaUserPlus/> Friend Request Sent </div>;
      default:
        return (<div> <FaUserPlus/> Add Friend </div>);
    }
  }

  handleFriendClick(e){
    e.preventDefault();
    const { currentUserProfile, viewedUserProfile} = this.props;
    let viewedId = this.props.friend.id;
    switch (true) {
      case currentUserProfile.friends.includes(viewedId):
        return "Do Nothing";
      case currentUserProfile.requesters.includes(viewedId):
        this.props.acceptFriending(viewedId);
        return "Accept Request";
      case currentUserProfile.recipients.includes(viewedId):
        return "Do Nothing";
      default:
        this.props.createFriending(viewedId);
        return  "Create Request";
    }
  }


  render(){
    const {firstName, lastName, profileImgUrl, id, friendCount} = this.props.friend;
    const {currentUserProfile} = this.props;
    return (
    <div className= "friendItem">
      <ProfileIcon imgUrl={profileImgUrl} />
      <div className="friendInfoContainer">
        <div className= "friendInfo">
          <h3><Link to={`/profile/${id}`}> {`${firstName} ${lastName}`} </Link> </h3>
          <h5><Link to={`/profile/${id}/friends`}> {friendCount || ""} Friends</Link></h5>
        </div>
        <div className="buttonContainer">
          <button className="headerButton item" onClick= {this.handleFriendClick}>
            {this.friendsButtonContent()}
          </button>
        </div>
      </div>
    </div>);
  }
}




export default FriendItem;
