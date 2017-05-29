import React from 'react';
import ProfileIcon from '../profile_icon';
import {Link} from 'react-router-dom';
import {FaChevronDown, FaPencil, FaCamera, FaUserPlus, FaCheck, FaGroup, FaPlus} from 'react-icons/lib/fa/';


class FriendRequestsPage extends React.Component {
  constructor(props){
    super(props);
    this.friendsButtonContent = this.friendsButtonContent.bind(this);
    this.handleFriendClickId = this.handleFriendClickId.bind(this);
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
  }

  friendsButtonContent(id){
    const { currentUserProfile} = this.props;
    let viewedId =  id||this.props.friend.id;
    switch (true) {
      case currentUserProfile.friends.includes(viewedId):
        return <div> <FaCheck/>Friends </div>;
      case currentUserProfile.requesters.includes(viewedId):
        return <div> Confirm </div>;
      case currentUserProfile.recipients.includes(viewedId):
        return  <div> <FaUserPlus/> Request Sent </div>;
      default:
        return (<div> <FaUserPlus/> Add Friend </div>);
    }
  }

  handleFriendClickId(id){
    return (e) => {
    e.preventDefault();
    const { currentUserProfile, viewedUserProfile} = this.props;
    let viewedId = id;
    switch (true) {
      case currentUserProfile.friends.includes(viewedId):
        return "Do Nothing";
      case currentUserProfile.requesters.includes(viewedId):
        this.props.acceptFriending(viewedId);
        return "Confirm";
      case currentUserProfile.recipients.includes(viewedId):
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
      this.props.deleteFriending(id);
    };
  }


  render() {
   const {currentUserProfile, relevantUsers} = this.props;
   if (!currentUserProfile.requests || Object.keys(relevantUsers).length === 0) {
     return <div></div>;
   }
   let requests = currentUserProfile.requests;
   requests = requests.map((userId)=>(relevantUsers[userId]));
   return (
     <div id="friendsRequestsPage">
       <ul id = "friendsRequestsListContainer" >
          <h1 id="requestsPageHeader">
             Respond to your {requests.length} Friend Requests
           </h1>
         {requests.map((request, idx)=>{
           const {firstName, lastName, profileImgUrl, id, friendCount} = request;
           return (<div key={"fItem" + idx} className= "requestItem">
             <div className="friendsRequestsList">
               <div className= "friendInfoList">
                 <ProfileIcon imgUrl={profileImgUrl} />
                 <h3 className={"requestLink"}><Link to={`/profile/${id}`}> {`${firstName} ${lastName}`} </Link> </h3>
               </div>
               <div className="buttonContainerList">
                 <button className="submitPost request" onClick= {this.handleFriendClickId(id)}>
                   {this.friendsButtonContent(id)}
                 </button>
                 <button onClick={this.handleDeleteRequest(id)} className="headerButton request">
                   Delete Request
                 </button>
               </div>
             </div>
           </div>);})
         }
       </ul>
     </div>
   );
  };
}



export default FriendRequestsPage;
