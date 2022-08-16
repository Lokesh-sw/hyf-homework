//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);
});

/*Create a function that takes 2 parameters: delay and stringToLog. 
Calling this function should log out the stringToLog after delay seconds. 
Call the function you have created with some different arguments.*/

function printDelayedText(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
printDelayedText(2, "this string logged after 2 seconds");
printDelayedText(5, "this string logged after 5 seconds");
printDelayedText(10, "this string logged after 10 seconds");

/*Create a button in html. When clicking this button, use the function you 
created in the previous task to log out the text: Called after 5 seconds 5 
seconds after the button is clicked.*/

const delay = () => {
  setTimeout(() => {
    console.log("Called after 5 seconds");
  }, 5000);
};

const buttonElement = document.getElementById("firstbutton");
buttonElement.addEventListener("click", delay);
console.log(buttonElement);

/*Create two functions and assign them to two different variables. One function logs out Earth, 
the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction.
The only thing the third function should do is call the provided parameter function. 
Try call the third function once with the Earth function and once with the Saturn function.*/

const earth = (earthLogger) => {
  console.log("earth");
};

const saturn = (saturnLogger) => {
  console.log("saturn");
};

function planetLogFunction(params) {
  return params();
}

planetLogFunction(earth);
planetLogFunction(saturn);

/*Create a button with the text called "Log location". When this button is clicked 
the location (latitude, longitude) of the user should be logged out using this browser api*/

function getLocation() {
  navigator.geolocation.getCurrentPosition(getLatLon);
  function getLatLon(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let show = document.querySelector(".locLog");
    show.innerHTML = `Latitude is ${latitude.toFixed(
      3
    )} and Longitude is ${longitude.toFixed(3)}`;
  }
}

const loc = document.getElementById("location");
loc.addEventListener("click", getLocation);
console.log(loc);

/*Create a function called runAfterDelay. It has two parameters: delay and callback. 
When called the function should wait delay seconds and then call the provided callback function. 
Try and call this function with different delays and different callback functions*/

function runAfterDelay(delay, callback) {
  setTimeout(() => {
    return callback();
  }, delay * 1000);
}

runAfterDelay(4, function () {
  console.log("Should be logged after 4 seconds");
});

/*Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!"*/

window.addEventListener("dblclick", (event) => {
  console.log("double click!");
});

/*Create a function called jokeCreator that has three parameters: 
shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that 
should log out a funny joke. And vice versa.*/

let shouldTellFunnyJoke = true;
const logFunnyJoke = () => {
  console.log(
    "Funny joke: Knock knock. Who’s there? Hawaii. Hawaii who? I’m fine, Hawaii you?."
  );
};
const logBadJoke = () => {
  console.log("Bad joke: What do you call sad coffee? Despresso.");
};
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    return logFunnyJoke(jokeCreator);
  } else {
    return logBadJoke(jokeCreator);
  }
}
jokeCreator(false, logFunnyJoke, logBadJoke);
