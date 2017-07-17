import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import ProfileIcon from '../profile_icon';
import FriendItemContainer from './friend_item_container';
import {Link} from 'react-router-dom';
import * as FriendUtil from '../../../utils/friend_button_util';

class FriendItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {UnfriendButton: true};
    this.handleFriendClick = this.handleFriendClick.bind(this);
    this.friendsButtonContent = this.friendsButtonContent.bind(this);
    this.handleUnFriendClick = this.handleUnFriendClick.bind(this);
  }

  friendsButtonContent(id) {
    const { currentUserProfile} = this.props;
    let viewedId = this.props.friend.id;
    switch (true) {
      case !!currentUserProfile.friends[viewedId]:
        return (
        <div className= "dropDown">
          <FaCheck/>Friends
            <ul className="dropDown-Friend">
              <div onClick={this.handleUnFriendClick(id)}>UnFriend</div>
            </ul>
        </div>);
      case !!currentUserProfile.requesters[viewedId]:
        return <div> <FaUserPlus/> Accept Friend Request </div>;
      case !!currentUserProfile.recipients[viewedId]:
        return  <div> <FaUserPlus/> Friend Request Sent </div>;
      default:
        return (<div> <FaUserPlus/> Add Friend </div>);
    }
  }

  handleFriendClick(e){
    e.preventDefault();
    const { currentUserProfile} = this.props;
    let viewedId = this.props.friend.id;

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
    handleUnFriendClick(id){
      return (e) =>{
      e.preventDefault();
      this.props.deleteFriending(id);
      this.setState({UnfriendButton: false});
    };
    }


  render(){
    const {firstName, lastName, profileImgUrl, id, friendCount} = this.props.friend;
    const {currentUserProfile} = this.props;
    return (
    <div className= "friendItem">
      <ProfileIcon imgUrl={profileImgUrl} />
      <div className="friendInfoContainer">
        <div className= "friendInfo">
          <h3><Link to={`/profile/${id}/timeline`}> {`${firstName} ${lastName}`} </Link> </h3>
          <h5><Link to={`/profile/${id}/friends`}> {friendCount || ""} Friends</Link></h5>
        </div>
        <div className="buttonContainer">
          {id === currentUserProfile.id ? "" : (<button className="headerButton item" onClick= {this.handleFriendClick}>
            {this.friendsButtonContent(id)}
          </button>)}

        </div>
      </div>
    </div>);
  }
}




export default FriendItem;
