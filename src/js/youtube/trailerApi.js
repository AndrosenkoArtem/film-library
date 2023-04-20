const spiner = document.querySelector('.bcdrop-spiner');

export default async function fetchUrl(filmId) {
  try {
    spiner.classList.add('visible');
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=14b7b0dab2e9101796b24880530a0048`
    );
    const films = await response.json();
    spiner.classList.remove('visible');

    return films.results;
  } catch (error) {
    spiner.classList.remove('visible');
    console.error(error);
    throw new Error('Error fetching film genres');
  }
}
