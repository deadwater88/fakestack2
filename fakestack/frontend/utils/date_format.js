
export const format1 = (time) => {
  let date = new Date(time);
  const locale = "en-us";
  const month = date.toLocaleString(locale, { month: "long" });
  const day = date.getDate();
  let str = date.toLocaleTimeString();
  let timeregex = /\d+:\d+/;
  let ampm = /[A-Z]+/;
  let timeParse = str.match(timeregex)[0] + str.match(ampm)[0];
  let output = `${month} ${day} at ${timeParse}`;
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
