class Themoviedb {
  constructor() {
    this.page = 1;
    this.results = 0;
    this.total_results = 0;
  }
  async fetchSearcFilms(name) {
    try {
      const searchParams = new URLSearchParams({
        api_key: '14b7b0dab2e9101796b24880530a0048',
        query: name,
        page: this.page,
      });

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?${searchParams}`
      );
      const films = response.json();
      this.total_results = await films;

      return films;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching film genres');
    }
  }
  async fetchPopularFilms() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=14b7b0dab2e9101796b24880530a0048&page=${this.page}`
      );
      const films = response.json();
      return films;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching film genres');
    }
  }
  // resetPage() {
  //   this.page = 1;
  // }
  // resetResults() {
  //   this.results = 0;
  // }
  setPage(newPage) {
    this.page = newPage;
  }
  getResults() {
    return this.results;
  }
  setResults(newCurrent) {
    this.results += newCurrent;
  }
  getTotal_results() {
    return this.total_results;
  }
  setTotal_results(newtotal) {
    this.total_results = newtotal;
  }
}
export { Themoviedb };
