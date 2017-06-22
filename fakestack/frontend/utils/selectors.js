import values from 'lodash/values';


export const selectCurrentUserComments = (state)=> {
  return "comments";

};

export const selectAllRelevantUsers = (state) => {
  return values(state.relevantUsers);
};

export const selectWallPosts = (state, location_id) => {
  let posts = values(state.posts).filter(post => post.locationId === parseInt(location_id));
  return posts.sort((post1,post2)=> new Date(post2.createdAt) - new Date(post1.createdAt));
};

export const selectFeedPosts = (state) => {
  let posts =  values(state.posts);
  return posts.sort((post1,post2)=> new Date(post2.createdAt) - new Date(post1.createdAt));
};

export const selectAuthor = (state, authorId) => {
  return state.relevantUsers[authorId] || {};
};

export const parseDetails = (state) => {
  const details = [];
  const {currentCity, hometown, otherNames} = state.currentUserProfile;
  if (currentCity !== "") {
    details.push([`Lives in ${currentCity}`, 'currentCity']);
  }
  if (hometown !== "") {
    details.push([`From ${hometown}`,`hometown`]);
  }
  otherNames.forEach((name)=>{
    details.push([`Also goes by ${name}`, 'otherName']);
  });
  return details;

};
