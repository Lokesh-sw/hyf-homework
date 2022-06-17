const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Friends",
    days: 4,
    hours: 2,
    minutes: 0,
  },
  {
    title: "Scrubs",
    days: 5,
    hours: 4,
    minutes: 0,
  },
];

function getSeriesTime() {
  let totalTime = 0;
  for (index = 0; index < seriesDurations.length; index++) {
    let time =
      ((seriesDurations[index].days * 24 * 60 +
        seriesDurations[index].hours * 60 +
        seriesDurations[index].minutes) /
        (80 * 365 * 24 * 60)) *
      100; // functin to convert entire time in minutes and divide it by 80 years in minutes and multiply by 100 to get percentage
    console.log(
      `${seriesDurations[index].title} took ${time.toFixed(3)}% of my life`
    );
    totalTime += time;
  }
  console.log(`In total that is ${totalTime.toFixed(3)}% of my life`);
}

getSeriesTime();
