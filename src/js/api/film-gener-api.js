class PopularFilmsGenres {
  constructor() {}
  async fetchUrl() {
    const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=14b7b0dab2e9101796b24880530a0048'
    );
    const films = response.json();
    return films;
  }
}
export { PopularFilmsGenres };
