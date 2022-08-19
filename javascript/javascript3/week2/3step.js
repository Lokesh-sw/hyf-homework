function setTimeoutPromise(Seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, Seconds);
  });
}

setTimeoutPromise(3000)
  .then(() =>
    fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    )
  )
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching and waiting 3 steps with  async/await
(async function () {
  await setTimeoutPromise(8000);
  const response = await fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  );
  const content = await response.json();
  console.log(content);
})();
