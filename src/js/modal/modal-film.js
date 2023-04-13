import { LocalStorage, render } from '../utils';
import marcapModal from './modal-template';

const refs = {
  filmList: document.querySelector('.films__list'),
  backdrop: document.querySelector('.modal-backdrop'),
  modalContainer: document.querySelector('.modal-container'),
};

/**
 * Открытие модального окна ниже
 */
export function onOpenModalWithSingleFilm(e) {
  const filmCollection = LocalStorage.getItem('all-films');
  if (e.target.className !== 'films__img') {
    return;
  }
  const currentFilm = filmCollection.results.find(film => {
    return parseInt(film.id) === parseInt(e.target.dataset.id);
  });

  const template = renderMarcap(currentFilm);
  render(refs.modalContainer, template);
  /**
   * Закрыть модальное окно и убрать за собой все следы
   */
  const buttonClose = document.querySelector('.button-close');
  buttonClose.addEventListener('click', onCloseModalWindow);
  refs.backdrop.classList.add('active');
  document.body.style = 'overflow: hidden';
  refs.backdrop.addEventListener('click', onClickBeckdropCloseModalWindow);
  window.addEventListener('keydown', onEscCloseModalWindow);
}

function renderMarcap(currentFilm) {
  const filmGeners = [];
  pushGenerInFilmGeners(currentFilm, filmGeners);

  return marcapModal(currentFilm, filmGeners);
}

function pushGenerInFilmGeners(currentFilm, filmGeners) {
  const generCollection = LocalStorage.getItem('all-geners');
  generCollection.genres.map(genre => {
    if (currentFilm.genre_ids.includes(genre.id)) {
      filmGeners.push(genre.name);
    }
  });
}

/**
 * Закрытие модального окна ниже
 */

function onCloseModalWindow(e) {
  if (e.target.className !== 'custom-icon') {
    return;
  }
  removeModal();
}
function onClickBeckdropCloseModalWindow(e) {
  if (e.target.className !== 'modal-backdrop active') {
    return;
  }
  removeModal();
  refs.backdrop.removeEventListener('click', onClickBeckdropCloseModalWindow);
}
function onEscCloseModalWindow(e) {
  if (e.key !== 'Escape') {
    return;
  }
  refs.backdrop.classList.remove('active');
  refs.modalContainer.innerHTML = `
    <button class="button-close" type="button">
        <div class="custom-icon"></div>
    </button>`;
  window.removeEventListener('keydown', onEscCloseModalWindow);
}
function removeModal() {
  refs.backdrop.classList.remove('active');
  document.body.style = '';
  refs.modalContainer.innerHTML = `
    <button class="button-close" type="button">
        <div class="custom-icon"></div>
    </button>`;
}
