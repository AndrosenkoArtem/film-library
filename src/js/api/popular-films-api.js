class PopularFilm {
  constructor() {}
  async fetchUrl() {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=14b7b0dab2e9101796b24880530a0048'
    );
    const films = response.json();
    return films;
  }
}

export { PopularFilm };
