import fetchTrailers from '../youtube/trailerApi';
const filmsListRef = document.querySelector('.films__list');
filmsListRef.addEventListener('click', onOpenTrailer);

async function onOpenTrailer(e) {
  e.preventDefault();

  if (!e.target.classList.contains('youtube-button')) {
    return;
  }
  const currentFilmId = e.target.closest('.films__card').dataset.id;

  const response = await fetchTrailers(currentFilmId);
  if (response.length >= 1) {
    createIframe(response[0].key);
  } else if (!response.length) {
    Notify.warning('There are no trailers for this movie');
    return;
  }
  document.body.style.overflow = 'hidden';
  const backdrop = document.querySelector('.backdrop-trailer');
  backdrop.classList.add('active');
  backdrop.addEventListener('click', onClickBeckdropCloseModalWindow);
}
function createIframe(results) {
  const iframe = `<div class="backdrop-trailer"><div class="modal-trailer"><button class="close-modal__trailer"><div class="custom-icon-2 white--custom"></div></button>
    <iframe class="iframe" fullscreen src="https://www.youtube.com/embed/${results}" frameborder="0"></iframe>
    </div></div>`;
  document.body.insertAdjacentHTML('beforeend', iframe);
  const closeModalBtn = document.querySelector('.close-modal__trailer');
  closeModalBtn.addEventListener('click', closeModalYouTube);
  window.addEventListener('keydown', onEscCloseModalWindow);
  /**
   * closeModal
   */
}
/**
 * закрыть модальное окно
 */
function closeModalYouTube() {
  const backdrop = document.querySelector('.backdrop-trailer');
  backdrop.remove();
  document.body.style = '';
}
function onClickBeckdropCloseModalWindow(e) {
  const backdrop = document.querySelector('.backdrop-trailer');
  if (e.target.className !== 'backdrop-trailer active') {
    return;
  }
  backdrop.remove();
  document.body.style = '';
  backdrop.removeEventListener('click', onClickBeckdropCloseModalWindow);
}
function onEscCloseModalWindow(e) {
  const backdrop = document.querySelector('.backdrop-trailer');
  if (e.key !== 'Escape') {
    return;
  }
  backdrop.remove();
  window.removeEventListener('keydown', onEscCloseModalWindow);
}
