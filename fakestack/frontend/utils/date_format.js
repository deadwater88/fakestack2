const formatMonthDay = (time) => {
  let date = new Date(time);
  const locale = "en-us";
  const month = date.toLocaleString(locale, { month: "long" });
  const day = date.getDate();
  return `${month} ${day}`;
};

const formatDayOfWeek = (time) => {
  let date = new Date(time);
  let weekmap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Frieday", "Saturday"];
  return weekmap[date.getDay()];
};

const formatTime = (time) => {
  const date = new Date(time);
  let str = date.toLocaleTimeString();
  let timeregex = /\d+:\d+/;
  let ampm = /[A-Z]+/;
  let timeParse = str.match(timeregex)[0] + str.match(ampm)[0];
  return timeParse;
};
// Outputs 'Month Day' ex 'July 21'

export const format1 = (time) => {
  let output = `${formatMonthDay(time)} at ${formatTime(time)}`;
  return output;
};
// Month day at timepm.

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}

export const recentDateFormat = (timeStamp) => {
  let recency = Date.now() - timeStamp;
  switch (true) {
    case recency < 86400000:
      return formatTime(timeStamp);
    case recency < 604800000:
      return formatDayOfWeek(timeStamp).slice(0,3);
    default:
      return formatMonthDay(timeStamp);
  }
};

// Given a recent date in seconds,
// generate a string representing the date based on recency
// less than 24 hours gives time ex 2:22am day = 86400000
// between 1 and 7 days give day of the week: ex Tue = 604800000
// greater than 7 days would give Month and Date
