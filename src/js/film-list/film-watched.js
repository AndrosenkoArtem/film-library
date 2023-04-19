import { renderCards } from '../utils/index';
import { onOpenModalWithSingleFilm } from '../modal/modal-film';

const refs = {
  filmList: document.querySelector('.films__list'),
  watchedBtn: document.querySelector('[data-watched]'),
  queueBtn: document.querySelector('[data-queue]'),
  filmTitle: document.querySelector('.film-title'),
  filmSection: document.querySelector('.film-section'),
  libraryContainer: document.querySelector('.library-container'),
};

refs.watchedBtn.addEventListener('click', onClickWatchedBtn);

async function onClickWatchedBtn(e) {
  const allFilms = JSON.parse(localStorage.getItem('filmsWatched'));
  const allGenres = JSON.parse(localStorage.getItem('all-geners')).genres;
  refs.filmList.innerHTML = '';
  refs.watchedBtn.classList.add('is-active');
  refs.queueBtn.classList.remove('is-active');

  onOpenModalWithSingleFilm(e, allFilms);

  refs.filmList.removeEventListener('click', onOpenModalWithSingleFilm);
  refs.filmList.addEventListener('click', onOpenModalWithSingleFilm);

  if (!allFilms || allFilms.length === 0) {
    refs.filmList.innerHTML = '';
    refs.libraryContainer.innerHTML = `<h1 class="film-title">Your list is empty</h1><ul class="film film--library"></ul>`;
    refs.filmSection.classList.add('library-plug');
    return;
  }

  refs.filmSection.classList.remove('library-plug');
  refs.filmTitle.remove();
  renderCards({ allFilms, allGenres });
}
/**
 * удалить фильм из списка ожидания
 */
