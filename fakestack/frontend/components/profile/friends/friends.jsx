import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile_picture_container';
import FriendItemContainer from './friend_item_container';

class Friends extends React.Component {
  constructor(props){
    super(props);
    const {relevantUsers, currentUserProfile, viewedUserProfile} = this.props;
    this.state = {friends: viewedUserProfile.friends.map(friendId => relevantusers[friendId])}

  }


  renderfriendsList(){
    const {relevantUsers, currentUserProfile, viewedUserProfile} = this.props;
    if (!relevantUsers || Object.keys(relevantUsers).length === 0) {
      return "";
    }
    let friends = viewedUserProfile.friends.map((friendId) => relevantUsers[friendId]);
    return (
      <ul id="friendsListContainer">
        {friends.map((friend, idx ) => (
          <li key={"friendItem" + idx}>
            <FriendItemContainer friend={friend}/>
          </li>
        ))}
      </ul>);
  }

  render() {
    const {relevantUsers, currentUserProfile, viewedUserProfile} = this.props;
    return (
    <div className="friendsContainer primaryContainer">
      <div className="sectionContainer">
        <div className="secondaryContainer">
          <div className="firstRowHeader">
            <h1> <FaGroup/> Friends</h1>
            <div className="friend buttonContainer">
              <button id="requestsButton" className="headerButton item"> Friend Requests {this.props.currentUserProfile.requests.length} </button>
              <button className="headerButton item find"> <FaPlus/> Find Friends</button>
            </div>
          </div>
          <h4> All Friends </h4>
        </div>
        {this.renderfriendsList()}
      </div>
    </div>);
  }

}

export default Friends;
