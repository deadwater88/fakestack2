import React from 'react';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import ProfilePictureContainer from '../profile_picture_container';
import FriendItemContainer from './friend_item_container';

class FriendItem extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return (
    <div className= "friendItem">
      Friend Item
    </div>);
  }
}




export default FriendItem;
