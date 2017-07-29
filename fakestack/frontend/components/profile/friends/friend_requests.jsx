import React from 'react';
import ProfileIcon from '../profile_icon';
import {Link} from 'react-router-dom';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';
import values from 'lodash/values';


class FriendRequests extends React.Component {
  constructor(props){
    super(props);
    this.friendsButtonContent = this.friendsButtonContent.bind(this);
    this.handleFriendClickId = this.handleFriendClickId.bind(this);
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
    this.state = this.props.requests;
  }


  friendsButtonContent(id){
    const { currentUserProfile} = this.props;
    let viewedId =  id||this.props.friend.id;
    switch (true) {
      case !!currentUserProfile.friends[viewedId]:
        return <div> <FaCheck/>Friends </div>;
      case !!currentUserProfile.requesters[viewedId]:
        return <div> Confirm </div>;
      case !!currentUserProfile.recipients[viewedId]:
        return  <div> <FaUserPlus/> Request Sent </div>;
      default:
        return (<div> <FaUserPlus/> Add Friend </div>);
    }
  }

  handleFriendClickId(id){
    return (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { currentUserProfile} = this.props;
    let viewedId = id;
    switch (true) {
      case Object.keys(currentUserProfile.friends).includes(viewedId):
        return "Do Nothing";
      case !!currentUserProfile.requesters[viewedId]:
        this.props.acceptFriending(viewedId);
        return "Confirm";
      case !!currentUserProfile.recipients[viewedId]:
        return "Do Nothing";
      default:
        this.props.createFriending(viewedId);
        return  "Create Request";
      }
    };

  }
  handleDeleteRequest(id){
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.deleteFriending(id);
    };
  }


  render() {
   const {currentUserProfile} = this.props;
   if (!currentUserProfile.requests) {
     return <div></div>;
   }
   let requests = values(currentUserProfile.requests);
  //  let requesters = currentUserProfile.requesters;
  //  requests = requests.map((userId)=>(requesters[userId]));
   return (
     <ul id = "friendsRequestsContainer" className = "dropDown-content requests" style={{display: 'flex'}}>
        <h4> Friend Requests </h4>
       {requests.map((request, idx)=>{
         const {firstName, lastName, profileImgUrl, id} = request;
         return (<div key={"fItem" + idx} className= "requestItem">
           <div className="friendsRequestsInfo">
             <ProfileIcon imgUrl={profileImgUrl} />
             <div className= "friendInfo">
               <h3 className={"requestLink"}><Link className={"profileLink"} to={`/profile/${id}/timeline`}> {`${firstName} ${lastName}`} </Link> </h3>
             </div>
             <div className="buttonContainer">
               <button className="submitPost request" onClick= {this.handleFriendClickId(id)}>
                 {this.friendsButtonContent(id)}
               </button>
                {currentUserProfile.requests[id] ? <button onClick={this.handleDeleteRequest(id)} className="headerButton request">
                   Delete Request
                 </button> :
                 ""}
             </div>
           </div>
         </div>);})
       }
     </ul>
   );
  }
}



export default FriendRequests;
