
export const fetchNotices = () => {
  return $.ajax({
    method: "GET",
    url: `api/notices`
  });
};
