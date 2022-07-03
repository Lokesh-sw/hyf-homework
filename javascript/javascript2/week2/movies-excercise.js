//Create an array of movies containing the movies with a short title (you define what short means)

const shortMovieTitle = movies.filter((short) => short.title.length <= 4);

console.log(shortMovieTitle);

//Create an array of movie titles with long movie titles

const longMovieTitle = movies.filter((long) => long.title.length >= 15);

console.log(longMovieTitle);

//Count the number of movies made between 1980-1989 (including both the years)

const movieYear = movies.filter(
  (year) => year.year >= 1980 && year.year <= 1989
);
console.log(movieYear);

//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const goodMovie = movies.filter((good) => good.rating >= 7);
const averageMovie = movies.filter(
  (average) => average.rating >= 4 && average.rating < 7
);
const badMovie = movies.filter((bad) => bad.rating < 4);
goodMovie.map((good) => (good.tag = "Good"));
badMovie.map((bad) => (bad.tag = "Bad"));
averageMovie.map((average) => (average.tag = "Average"));

const tagArray = [{ goodMovie }, { averageMovie }, { badMovie }];

console.log(tagArray);

/*Using chaining, first filter the movies array to only contain the movies rated higher than 6.
 Now map the movies array to only the rating of the movies. */

const movieRatings = movies
  .filter((rate) => rate.rating > 6)
  .map((rate) => rate.rating);

console.log(movieRatings);

/* Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. 
So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. 
Can you make sure the search is case insensitive ? */

const totalNumber = movies.filter(
  (match) =>
    match.title.toLowerCase().includes("surfer") ||
    match.title.toLowerCase().includes("alien") ||
    match.title.toLowerCase().includes("Benjamin").length
);

console.log(totalNumber);

/*Create an array of movies where a word in the title is duplicated. 
Fx "Star Wars: The Clone Wars" the word Wars is duplicated. 
Here are some madeup examples of movies with duplicated words in the title: 
"The three men and the pistol", "Chase three - The final chase" */

const duplicateWords = movies.filter((movie) => {
  const repeat = [];
  const dupWords = movie.title.toLowerCase().split(" ");
  let result = false;
  dupWords.forEach((word) => {
    if (repeat.includes(word)) {
      result = true;
    } else {
      repeat.push(word);
    }
  });
  return result;
});
console.log(duplicateWords);

//Calculate the average rating of all the movies using reduce.Optional

const ratings = movies.map((rate) => rate.rating);

const arrAvg = ratings.reduce((a, b) => a + b, 0) / ratings.length;

console.log(arrAvg);

/*Count the total number of Good, Average and Bad movies using reduce. 
A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional*/

const rating = movies.reduce(
  (object, movie) => {
    if (movie.rating >= 7) {
      object.goodOnes += 1;
    } else if (movie.rating >= 4 && movie.rating < 7) {
      object.averageOnes += 1;
    } else {
      object.badOnes += 1;
    }
    return object;
  },
  {
    goodOnes: 0,
    averageOnes: 0,
    badOnes: 0,
  }
);
console.log(rating);
