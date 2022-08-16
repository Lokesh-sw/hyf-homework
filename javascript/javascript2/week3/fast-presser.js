const body = document.querySelector("body");
let sCount = 0;
let lCount = 0;
let time = 0;
let playerOne;
let playerTwo;
const leaderBoardScoresArray = [];

function start() {
  let time = document.getElementById("inputTime").value;
  if (time == 0 || time == " ") {
    let alerts = document.getElementById("alerts");
    alerts.innerHTML = "Please enter duration for the game";
  } else {
    startTime(time);
  }
}

function editNames() {
  let playerOne = document.getElementById("playerOne").value;
  let playerTwo = document.getElementById("playerTwo").value;
  document.querySelector("p.nameOne").innerHTML = playerOne;
  document.querySelector("p.nameTwo").innerHTML = playerTwo;
}

const countKeyDowns = (event) => {
  if (event.key === "s") {
    let displaySCount = document.getElementById("displayS");
    sCount++;
    displaySCount.innerHTML = sCount;
  } else if (event.key === "l") {
    let displayLCount = document.getElementById("displayL");
    lCount++;
    displayLCount.innerHTML = lCount;
  }
};

function fireConfetti(id) {
  var confettiSettings = { target: id };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => confetti.clear(), 6000);
}

function startTime(time) {
  body.addEventListener("keydown", countKeyDowns);
  setTimeout(() => gameResults(), time * 1000);
}

function gameResults() {
  body.removeEventListener("keydown", countKeyDowns);
  if (sCount > lCount) {
    alerts.innerHTML =
      "The winner is " + document.getElementById("playerOne").value + "!";
    leaderBoardScoresArray.push(
      "Name: " +
        document.getElementById("playerOne").value +
        " Score: " +
        sCount
    );
    leaderboardScores();
    fireConfetti("canvasS");
  } else if (sCount < lCount) {
    alerts.innerHTML =
      "The winner is " + document.getElementById("playerTwo").value + "!";
    leaderBoardScoresArray.push(
      "Name: " +
        document.getElementById("playerTwo").value +
        " Score: " +
        lCount
    );
    leaderboardScores();
    fireConfetti("canvasS");
  } else if (sCount === lCount) {
    alerts.innerHTML = "It's a Draw!";
  } else {
    alerts.innerHTML = "Try Again!";
  }
}

function reset() {
  body.removeEventListener("keydown", countKeyDowns);
  displayL.innerHTML = "";
  displayS.innerHTML = "";
  alerts.innerHTML = " ";
  document.getElementById("inputTime").value = "";
  document.getElementById("playerOne").value = "";
  document.getElementById("playerTwo").value = "";
  document.querySelector("p.nameOne").innerHTML = "Player One";
  document.querySelector("p.nameTwo").innerHTML = "Player Two";
  sCount = 0;
  lCount = 0;
  console.log(leaderBoardScoresArray);
}

function leaderboardScores() {
  const unorderedList = document.querySelector("ul");
  unorderedList.innerHTML = " ";
  leaderBoardScoresArray.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = "<h3>" + item;
    unorderedList.appendChild(li);
  });
}
