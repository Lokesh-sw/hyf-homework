const activities = [];
function addActivity(date, activity, duration) {
  if (
    typeof date !== "string" &&
    typeof activity !== "string" &&
    typeof duration !== "number"
  ) {
    console.log("please enter valid activity");
  } else {
    activities.push({ date, activity, duration });
  }
}

// added activities

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "snapchat", 50);
addActivity("23/7-18", "instagram", 20);

addActivity();

function showStatus(activities) {
  let totalTime = 0;
  const durationLimit = 110; // set spend time limit
  for (let i = 0; i < activities.length; i++) {
    totalTime += activities[i].duration;
  }
  if (activities.length == 0) {
    return console.log(`Add some activities before calling showStatus.`);
  } else if (totalTime <= durationLimit) {
    return console.log(
      `You have added ${activities.length} activities. They amount to ${totalTime} min. of usage`
    );
  } else
    return console.log(
      `You have reached your limit, no more smartphoning for you!`
    );
}
showStatus(activities);
