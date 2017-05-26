import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import ProfileIcon from '../profile_icon';
import FriendItemContainer from './friend_item_container';
import {Link} from 'react-router-dom';
import * as FriendUtil from '../../../utils/friend_button_util';

class FriendItem extends React.Component {
  constructor(props){
    super(props);
    this.handleFriendClick = FriendUtil.handleFriendClick.bind(this);
    this.friendsButtonContent = FriendUtil.friendsButtonContent.bind(this);
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
