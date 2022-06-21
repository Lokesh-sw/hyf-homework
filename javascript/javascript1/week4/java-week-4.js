const list = [];
let userName = "";

function getReply(command) {
  if (command === " " || typeof command !== "string") {
    return "Please enter a valid entry";
  } else if (command.includes("my name is") && userName.length === 0) {
    userName = command.split(" ").pop();
    return `Nice to meet you ${command.split(" ").pop()}.`;
  } else if (
    command.includes("my name is") ||
    command.includes(`${userName}`)
  ) {
    return "Name is already registered";
  } else if (!userName) {
    return "You haven't mentioned your name. What is your name?";
  } else {
    return `your name is ${userName}`;
  }
}

console.log(getReply());
console.log(getReply("my name is Lokesh"));
console.log(getReply("my name is Lokesh"));
console.log(getReply("what is my name?"));

function addToDo(todo) {
  if (todo === "Add fishing to my todo") {
    list.push("fishing");
    return "Fishing added to list.";
  } else if (todo === "Do homework on time") {
    list.push("homework");
    return "Have to do yourself";
  }
}

console.log(addToDo(`Add fishing to my todo`));
console.log(addToDo("Do homework on time"));

function removeToDo(todo) {
  if (todo === "Remove fishing from my todo") {
    list.splice(list.indexOf("fishing"), 1);
    return "fishing removed from list";
  } else if (todo === "What is on my todo?") {
    return `You have ${list.length} todos- ${list.join(",")}.`;
  } else if (todo === "What day is it today?") {
    const today = new Date();
    return `${today.getDate()} of ${today.toLocaleString("default", {
      month: "long",
    })} ${today.getFullYear()}.`;
  }
}

console.log(removeToDo(`Remove fishing from my todo`));
console.log(removeToDo("What is on my todo?"));
console.log(removeToDo("What day is it today?"));

function doMath(command) {
  if (command.includes("+")) {
    let result = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
    return `${Math.floor(result[0]) + Math.floor(result[2])}`;
  } else if (command.includes("*")) {
    let result = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
    return Math.floor(result[0]) * Math.floor(result[2]);
  } else if (command.includes("/")) {
    let result = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
    return Math.floor(result[0]) / Math.floor(result[2]);
  } else if (command.includes("-")) {
    let result = command.match(/(?<=^|[-+*/])\-\d+|\d+|[-+*/]/g);
    return Math.floor(result[0]) - Math.floor(result[2]);
  }
}

console.log(doMath("16 + 4"));
console.log(doMath("16 * 4"));
console.log(doMath("16 / 4"));
console.log(doMath("16 - 4"));

function getTimer(command) {
  if (command === "Set a timer for 4 minutes") {
    setTimeout(console.log, 4 * 60 * 1000, "Timer done");
    return "Timer set for 4 minutes";
  }
}

console.log(getTimer("Set a timer for 4 minutes"));
