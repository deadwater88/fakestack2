import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile_picture_container';
import FriendItemContainer from './friend_item_container';

class Friends extends React.Component {
  constructor(props){
    super(props);
  }

  renderfriendsList(){
    const {relevant_users, currentUserProfile, viewedUserProfile} = this.props;
    let friends = viewedUserProfile.friends.map((friendId) => relevant_users[friendId]);
    return Object.keys(this.props.relevant_users).length > 0 ?
      (<ul id="friendsListContainer">
        {friends.map((friend,idx ) => (
          <li key={"friendItem + idx"}>
            <FriendItemContainer/>
          </li>
        ))}
      </ul>)
    : "";
  }

  render() {
    const {relevant_users, currentUserProfile, viewedUserProfile} = this.props;
    return (
    <div className="friendsContainer primaryContainer">
      <div className="sectionContainer">
        <div className="secondaryContainer">
          <div className="firstRowHeader">
            <h1> <FaGroup/> Friends</h1>
            <div className="friend buttonContainer">
              <button> Friend Requests {this.props.currentUserProfile.friends.length} </button>
              <button> <FaPlus/> Find Friends</button>
            </div>
          </div>
          <div> All Friends </div>
        </div>
        {this.renderfriendsList()}
      </div>
    </div>);
  }

}

export default Friends;
