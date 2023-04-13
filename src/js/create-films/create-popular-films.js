import { PopularFilm } from '../api/popular-films-api';
import { PopularFilmsGenres } from '../api/film-gener-api';
import { LocalStorage } from '../utils';
import { onOpenModalWithSingleFilm } from '../modal/modal-film';
import { renderCards } from '../utils/index';
const refs = {
  filmList: document.querySelector('.films__list'),
};
const popularFilm = new PopularFilm();
const popularFilmsGenres = new PopularFilmsGenres();

popularFilm.fetchUrl().then(response => {
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
  const allFilms = JSON.parse(localStorage.getItem('all-films'));

  if (!allFilms || !allFilms.results) {
    return [];
  }
  const allGenres = JSON.parse(localStorage.getItem('all-geners')).genres;

  renderCards({ allFilms, allGenres });
}
