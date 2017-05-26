import React from 'react';
import ProfileIcon from '../profile_icon';
import {Link} from 'react-router-dom';
import * as FriendUtil from '../../../utils/friend_button_util';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';


class FriendRequests extends React.Component {
  constructor(props){
    super(props);
    this.friendsButtonContent = FriendUtil.friendsButtonContent.bind(this);
    this.handleFriendClickId = FriendUtil.handleFriendClickId.bind(this);
  }



  render() {
   const {currentUserProfile, relevantUsers} = this.props;
   debugger
   let requests = currentUserProfile.requests;
   requests = requests.map((userId)=>(relevantUsers[userId]));
   debugger
   return (
     <div>
       {requests.map((request)=>{
         const {firstName, lastName, profileImgUrl, id, friendCount} = request;
         debugger;
         return (<div className= "friendItem">
           <ProfileIcon imgUrl={profileImgUrl} />
           <div className="friendInfoContainer">
             <div className= "friendInfo">
               <h3><Link to={`/profile/${id}`}> {`${firstName} ${lastName}`} </Link> </h3>
               <h5><Link to={`/profile/${id}/friends`}> {friendCount || ""} Friends</Link></h5>
             </div>
             <div className="buttonContainer">
               <button className="headerButton item" onClick= {this.handleFriendClickId(id)}>
                 {this.friendsButtonContent(id)}
               </button>
             </div>
           </div>
         </div>);})
       })
     </div>
   );
  };
}



export default FriendRequests;
