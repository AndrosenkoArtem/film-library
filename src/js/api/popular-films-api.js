class PopularFilm {
  constructor() {}
  async fetchUrl() {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=14b7b0dab2e9101796b24880530a0048'
      );
      const films = response.json();
      return films;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching film genres');
    }
  }
}

export { PopularFilm };
