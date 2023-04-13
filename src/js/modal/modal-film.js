const refs = {
  filmList: document.querySelector('.films__list'),
  backdrop: document.querySelector('.modal-backdrop'),
  modalContainer: document.querySelector('.modal-container'),
};
refs.filmList.addEventListener('click', onClickImgReturnFilm);

const filmCollection = JSON.parse(localStorage.getItem('all-films'));
console.log('filmCollection:', filmCollection);
const generCollection = JSON.parse(localStorage.getItem('all-geners'));
console.log('generCollection:', generCollection);
/**
 * Открытие модального окна ниже
 */
function onClickImgReturnFilm(e) {
  if (e.target.className !== 'films__img') {
    return;
  }
  const index = filmCollection.results.findIndex(
    film => film.title === e.target.alt
  );
  const currentFilm = filmCollection.results[index];
  createModal(currentFilm);
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
function createModal(currentFilm) {
  refs.modalContainer.insertAdjacentHTML(
    'beforeend',
    renderMarcap(currentFilm)
  );
}
function pushGenerInFilmGeners(currentFilm, filmGeners) {
  generCollection.genres.map(genre => {
    if (currentFilm.genre_ids.includes(genre.id)) {
      filmGeners.push(genre.name);
    }
  });
}
function marcapModal(currentFilm, filmGeners) {
  return `
        <div class="modal-img-container">
          <img
            class="modal-img"
            src="https://image.tmdb.org/t/p/w500/${currentFilm.poster_path}"
            alt="${addAudit(currentFilm.title)}"
          />
        </div>
        <div class="description">
          <h1 class="description__title">${addAudit(currentFilm.title)}</h1>
          <div class="info-stats">
            <ul class="info-stats__list">
              <li class="info-stats__item">
                <p class="info-stats__subtitle">Vote / Votes</p>
              </li>
              <li class="info-stats__item">
                <p class="info-stats__subtitle">Popularity</p>
              </li>
              <li class="info-stats__item">
                <p class="info-stats__subtitle">Original Title</p>
              </li>
              <li class="info-stats__item">
                <p class="info-stats__subtitle">Genre</p>
              </li>
            </ul>
            <ul class="stats">
              <li class="stats__item">
                <p class="stats__subtitle">
                  <span class="rating">${addAudit(
                    currentFilm.vote_average.toFixed(1)
                  )}</span>
                  <span class="rating__or">/</span>
                  <span class="rating rating--white">${addAudit(
                    currentFilm.vote_count
                  )}</span>
                </p>
              </li>
              <li class="stats__item"><p class="stats__subtitle">${addAudit(
                currentFilm.popularity.toFixed(1)
              )}</p></li>
              <li class="stats__item">
                <p class="stats__subtitle">${addAudit(
                  currentFilm.original_title
                )}</p>
              </li>
              <li class="stats__item">
                <p class="stats__subtitle">${addAudit(
                  filmGeners.join(', ')
                )}</p>
              </li>
            </ul>
          </div>
          <h2 class="about">About</h2>
          <p class="about__description">
             ${addAudit(currentFilm.overview)}
          </p>
          <button class="add-button" type="button" data-id="${
            currentFilm.id
          }">add to Watched</button>
          <button class="add-button" type="button" data-id="${
            currentFilm.id
          }">add to queue</button>
        </div>


    `;
}
function addAudit(data) {
  if (data.length === 0) {
    return 'No information';
  }
  return data;
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
