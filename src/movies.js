// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`));
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scores = moviesArray.map(movie => movie.score);

    const avg = (scores.reduce(function(acc, curr) {
        if (!curr) {
            return acc;
        } else {
            return acc + curr;
        }
    }) / scores.length);

    return avg % 1 !== 0 ? avg.toFixed(2) : avg;
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const avg = (moviesArray.reduce(function(acc, curr) {
        if (curr.genre.includes('Drama')) {
            return acc + curr.score;
        } else {
            return acc;
        }
    }) / moviesArray.length);

    return avg;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const orderedArray = moviesArray.map(element => element);

    orderedArray.sort(function(a,b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }

        return a.year - b.year;

    });

    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const titleArray = moviesArray.map(movie => movie.title);

    titleArray.sort(function(a, b) {
        return a.localeCompare(b);
    })

    const twenty = titleArray.slice(0,20);

    return twenty;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
