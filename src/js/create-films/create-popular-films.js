// import { PopularFilm } from '../api/popular-films-api';
import { Themoviedb } from '../api/themoviedb-api';
import { PopularFilmsGenres } from '../api/film-gener-api';
import { LocalStorage } from '../utils';
import { onOpenModalWithSingleFilm } from '../modal/modal-film';
import { renderCards } from '../utils/index';
import PaginationOption from '../pagination/paginationHome';

const refs = {
  filmList: document.querySelector('.films__list'),
  pagination: document.querySelector('#pagination'),
};
refs.pagination.style = 'display:none';

const popularFilmsGenres = new PopularFilmsGenres();
const themoviedb = new Themoviedb();

themoviedb.fetchPopularFilms().then(response => {
  themoviedb.setTotal_results(response.total_results);
  LocalStorage.setItem('all-films', response);
  refs.filmList.addEventListener('click', e =>
    onOpenModalWithSingleFilm(e, response)
  );
});
popularFilmsGenres.fetchUrl().then(response => {
  LocalStorage.setItem('all-geners', response);
  filmApiResponse();
});

async function filmApiResponse() {
  const allFilms = JSON.parse(localStorage.getItem('all-films')).results;

  if (!allFilms) {
    return [];
  }
  const allGenres = JSON.parse(localStorage.getItem('all-geners')).genres;

  renderCards({ allFilms, allGenres });
  refs.pagination.style = 'display:flex';
  return allFilms;
}
/**
 * Pagination
 */
const paginationOption = new PaginationOption(
  LocalStorage.getItem('all-films')?.total_results
);
paginationOption.pagination.on('afterMove', async ({ page }) => {
  refs.filmList.innerHTML = '';
  themoviedb.setPage(page);

  await themoviedb.fetchPopularFilms().then(response => {
    LocalStorage.setItem('all-films', response);
    filmApiResponse();
  });
});
