import React from 'react';


export default (props) => {
  const {currentUserProfile, relevantUsers} = props;
  debugger
  let requests = currentUserProfile.requests;
  requests.map((userId)=>(relevantUsers[userId]));
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
              <button className="headerButton item" onClick= {this.handleFriendClick}>
                {this.friendsButtonContent()}
              </button>
            </div>
          </div>
        </div>);})
      })
    </div>
  );
};
