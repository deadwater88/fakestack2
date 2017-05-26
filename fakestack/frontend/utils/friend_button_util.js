export const friendsButtonContent = (id) => {
  debugger;
  const { currentUserProfile} = this.props;
  let viewedId =  id||this.props.friend.id;
  debugger
  switch (true) {
    case currentUserProfile.friends.includes(viewedId):
      return <div> <FaCheck/>Friends </div>;
    case currentUserProfile.requesters.includes(viewedId):
      return <div> <FaUserPlus/> Accept Friend Request </div>;
    case currentUserProfile.recipients.includes(viewedId):
      return  <div> <FaUserPlus/> Friend Request Sent </div>;
    default:
      return (<div> <FaUserPlus/> Add Friend </div>);
  }
};

export const handleFriendClick = (e) =>{
  e.preventDefault();
  const { currentUserProfile, viewedUserProfile} = this.props;
  let viewedId = this.props.friend.id;
  switch (true) {
    case currentUserProfile.friends.includes(viewedId):
      return "Do Nothing";
    case currentUserProfile.requesters.includes(viewedId):
      this.props.acceptFriending(viewedId);
      return "Accept Request";
    case currentUserProfile.recipients.includes(viewedId):
      return "Do Nothing";
    default:
      this.props.createFriending(viewedId);
      return  "Create Request";
  }
};


export const handleFriendClickId = (id) => (e) => {
  e.preventDefault();
  const { currentUserProfile, viewedUserProfile} = this.props;
  let viewedId = id;
  switch (true) {
    case currentUserProfile.friends.includes(viewedId):
      return "Do Nothing";
    case currentUserProfile.requesters.includes(viewedId):
      this.props.acceptFriending(viewedId);
      return "Accept Request";
    case currentUserProfile.recipients.includes(viewedId):
      return "Do Nothing";
    default:
      this.props.createFriending(viewedId);
      return  "Create Request";
  }
};
