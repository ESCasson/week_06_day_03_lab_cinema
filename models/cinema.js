const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function () {
  return this.films.map((film) => {
    return film.title
  })
};

Cinema.prototype.getFilmByTitle = function (filmTitle) {
   return this.films.find((film) => {
    return film.title === filmTitle

  })
};

Cinema.prototype.filterByGenre = function (genre) {
   return this.films.filter((film) => {
    return film.genre === genre
  })
};

Cinema.prototype.filterByProperty = function (property, value) {
   return this.films.filter((film) => {
    return film[property] === value
  })
};





Cinema.prototype.checkFilmsByYear = function (year) {
  return this.films.some((film) => {
    return film.year === year
  })
};

Cinema.prototype.checkLengthOfAllFilms = function (length) {
  return this.films.every((film) => {
    return film.length > length
  })

};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((total, film) => {
    return total + film.length
  }, 0)

};







module.exports = Cinema;
