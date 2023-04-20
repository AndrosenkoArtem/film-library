import LocalStorage from '../utils/localStorage';

export default function addFilmInWatchedArray() {
  const addQueue = document.querySelector('.add-queue-js');
  textContentBtnDelete(addQueue);
  addQueue.addEventListener('click', onClickWatchedBtn);

  function onClickWatchedBtn() {
    const filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
    const allFilms = LocalStorage.getItem('all-films');
    const currentFilm = allFilms.results.find(
      film => film.id === Number(addQueue.dataset.id)
    );
    if (filmsQueue) {
      const repeatedFilm = filmsQueue.find(
        film => film.id === Number(addQueue.dataset.id)
      );
      if (repeatedFilm) {
        deleteFilm({ filmsQueue, repeatedFilm, addQueue });
        return;
      }
      LocalStorage.setItem('filmsQueue', [...filmsQueue, currentFilm]);
    } else {
      LocalStorage.setItem('filmsQueue', [currentFilm]);
    }
    addQueue.textContent = 'DELETE TO queue';
  }
}
/**
 * если фильм в просмотренных пишем DELETE
 */
function textContentBtnDelete(addQueue) {
  const filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
  if (filmsQueue) {
    const repeatedFilm = filmsQueue.find(
      film => film.id === Number(addQueue.dataset.id)
    );
    if (repeatedFilm) {
      addQueue.textContent = 'delete to watched';
    }
  }
}
///////////////////////////////////////////////////////////////////////////
/**
 * удалить фильм из локал стореджа
 */
function deleteFilm({ filmsQueue, repeatedFilm, addQueue }) {
  const currentFilmindex = filmsQueue.findIndex(film => film === repeatedFilm);
  filmsQueue.splice(currentFilmindex, 1);
  localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  addQueue.textContent = 'add to queue';
}
///////////////////////////////////////////////////////////////////////////
///
