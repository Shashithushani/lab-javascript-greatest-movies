// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movies) => movies.director);
  // const allDirectors =
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  //   console.log(moviesArray);
  //   let dramaCount = [];
  const dramaMovies = moviesArray.filter((movie, id, ar) => {
    movie.director === "Steven Spielberg" && movie.genre === "drama";
  });

  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const scores = moviesArray
    .map((mov1, id, arr) => {
      if (mov1.score === undefined || mov1.score == "") {
        return 0;
      } else {
        return mov1.score;
      }
    })
    .reduce((acc, cur) => acc + cur, 0);
  const average = scores / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray === "drama") {
    return 0;
  }

  //   let count = 0;
  //   const drama = moviesArray
  //     .filter((movi, ind, arr) => {
  //       if (movi.gerne[i] === "drama") {
  //         count += count;
  //         return count;
  //       }
  //     })
  //     .reduce((acc, cur) => acc + cur, 0);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sorting = moviesArray.slice().sort((a, b) => a.year - b.year);
  return sorting;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //   console.log(moviesArray);
  const titleByOder = moviesArray
    .slice(0, 20)
    .sort((a, b) => a.title - b.title);
  return titleByOder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
