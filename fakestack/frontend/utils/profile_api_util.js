export const uploadProfilePic = (profile_img_url, userId) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    data: {user: profile_img_url}
  });
};

export const updateProp = (prop, userId) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    contentType: "application/json",
    data: JSON.stringify({user: prop})
  });

};
