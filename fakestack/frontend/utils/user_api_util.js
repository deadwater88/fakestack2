export const fetchRelevantUsers = (query) => {
  return $.ajax({
    method: "GET",
    url: `api/relevant_users?query=${query}`
  });
};
