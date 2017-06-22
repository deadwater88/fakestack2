export const uploadPic = (prop, userId) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    data: {user: prop}
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

export const updateProfileProp = (prop, url) => {
  return $.ajax({
    method: "POST",
    url: `api/${url}`,
    contentType: "application/json",
    data: JSON.stringify(prop)
  });

};

export const fetchUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  });
};
