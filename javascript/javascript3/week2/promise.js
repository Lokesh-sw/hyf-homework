function getPromise(waiting) {
  const setTime = waiting * 1000;
  return new Promise((resolve) => setTimeout(resolve, setTime));
}

getPromise(8).then(() => {
  console.log("I am called asynchronously");
});
