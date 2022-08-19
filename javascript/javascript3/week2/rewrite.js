function setTimeoutPromise(Seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, Seconds);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => {
        resolve({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        });
      },
      (error) => reject(error.message)
    );
  });
}
getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });
