const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function whenToArrive(destinationDistance, speed) {
  const decimalTime =
    travelInformation.destinationDistance / travelInformation.speed;
  return `${Math.floor(decimalTime)} hours and ${Math.floor(
    (decimalTime - Math.floor(decimalTime)) * 60
  )} minutes`;
}

const travelTime = whenToArrive(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
