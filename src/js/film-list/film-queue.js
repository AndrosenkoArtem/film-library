import { renderCards } from '../utils/index';
import { onOpenModalWithSingleFilm } from '../modal/libraryModal';
const refs = {
  filmList: document.querySelector('.films__list'),
  watchedBtn: document.querySelector('[data-watched]'),
  queueBtn: document.querySelector('[data-queue]'),
  filmTitle: document.querySelector('.film-title'),
  filmSection: document.querySelector('.film-section'),
  libraryContainer: document.querySelector('.library-container'),
};
let filmList = document.querySelector('.films__list');

refs.queueBtn.addEventListener('click', onClickQueue);

async function onClickQueue(e) {
  filmList = document.querySelector('.films__list');
  const filmTitle = document.querySelector('.film-title');
  /**
   * refs
   */
  filmList.innerHTML = '';
  refs.queueBtn.classList.add('is-active');
  refs.watchedBtn.classList.remove('is-active');
  const allFilms = JSON.parse(localStorage.getItem('filmsQueue'));
  const allGenres = JSON.parse(localStorage.getItem('all-geners')).genres;

  if (!allFilms || allFilms.length === 0) {
    refs.libraryContainer.innerHTML = `<h1 class="film-title">Your list is empty</h1><ul class="films__list film--library"></ul>`;
    filmList = document.querySelector('.films__list');
    refs.filmSection.classList.add('library-plug');
    filmList.innerHTML = '';
    return;
  }
  refs.filmSection.classList.remove('library-plug');
  filmTitle?.remove();
  renderCards({ allFilms, allGenres });

  onOpenModalWithSingleFilm(e, allFilms);

  filmList.removeEventListener('click', onOpenModalWithSingleFilm);
  filmList.addEventListener('click', onOpenModalWithSingleFilm);
}
