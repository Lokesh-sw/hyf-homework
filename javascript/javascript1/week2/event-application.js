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
  let eventDay = [(today + numberDay) % 7];
  return weekDay[eventDay - 1];
}

console.log(getEventWeekday(3)); //should log out Thursday

console.log(getEventWeekday(6)); // should log out sunday
