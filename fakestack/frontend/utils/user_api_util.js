export const fetchRelevantUsers = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/relevant_users`
  });
};
