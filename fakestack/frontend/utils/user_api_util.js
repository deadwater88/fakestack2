export const fetchRelevantUsers = (query) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${query}/relevant_users`
  });
};
