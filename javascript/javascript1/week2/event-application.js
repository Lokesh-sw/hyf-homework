const weekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function getEventWeekday(numberDay) {
  const day = new Date();
  let today = day.getDay();
  let eventDay = [(today + numberDay - 1) % 7];
  return weekDay[eventDay];
}

console.log(getEventWeekday(3)); //should log out Thursday

console.log(getEventWeekday(4)); // should log out friday
