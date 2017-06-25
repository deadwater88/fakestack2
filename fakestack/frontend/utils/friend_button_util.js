export const friendsButtonContent = (id) => {
  const { currentUserProfile} = this.props;
  let viewedId =  id||this.props.friend.id;
  switch (true) {
    case Object.keys(currentUserProfile.friends).includes(viewedId):
      return <div> <FaCheck/>Friends </div>;
    case currentUserProfile.requesters[viewedId]:
      return <div> <FaUserPlus/> Accept Friend Request </div>;
    case currentUserProfile.recipients[viewedId]:
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
    case Object.keys(currentUserProfile.friends).includes(viewedId):
      return "Do Nothing";
    case currentUserProfile.requesters[viewedId]:
      this.props.acceptFriending(viewedId);
      return "Accept Request";
    case currentUserProfile.recipients[viewedId]:
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
    case currentUserProfile.requesters[viewedId]:
      this.props.acceptFriending(viewedId);
      return "Accept Request";
    case currentUserProfile.recipients[viewedId]:
      return "Do Nothing";
    default:
      this.props.createFriending(viewedId);
      return  "Create Request";
  }
};
