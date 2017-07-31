import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile_picture_container';
import FriendItemContainer from './friend_item_container';
import {Link} from 'react-router-dom';
import values from 'lodash/values'

class Friends extends React.Component {
  constructor(props){
    super(props);
    const {currentUserProfile, viewedUserProfile} = this.props;
    this.state = {friends: values(viewedUserProfile.friends)};

  }


  renderfriendsList(){
    const {currentUserProfile, viewedUserProfile} = this.props;
    if (!currentUserProfile) {
      return "";
    }
    let friends = values(viewedUserProfile.friends);
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
    let friends = values(this.props.viewedUserProfile.friends);
    return (
    <div className="friendsContainer primaryContainer">
      <div className="sectionContainer">
        <div className="secondaryContainer">
          <div className="firstRowHeader">
            <h1> <FaGroup/> Friends</h1>
            <div className="friend buttonContainer">
              {this.props.authorized ? (
              <Link to={'/friends/requests'}>
                <button id="requestsButton" className="headerButton item"> Friend Requests {this.props.currentUserProfile.requests.length} </button>
              </Link>) : ""}
              <button className="headerButton item find"> <FaPlus/> Find Friends</button>
            </div>
          </div>
          <h4> All Friends {friends.length} </h4>
        </div>
        {this.renderfriendsList()}
      </div>
    </div>);
  }

}

export default Friends;
