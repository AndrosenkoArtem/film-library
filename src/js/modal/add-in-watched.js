import LocalStorage from '../utils/localStorage';

export default function addFilmInWatchedArray() {
  const addWatched = document.querySelector('.add-watched-js');

  textContentBtnDelete(addWatched);
  addWatched.addEventListener('click', onClickWatchedBtn);

  function onClickWatchedBtn() {
    const filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));
    const allFilms = LocalStorage.getItem('all-films');
    const currentFilm = allFilms.results.find(
      film => film.id === Number(addWatched.dataset.id)
    );
    if (filmsWatched) {
      const repeatedFilm = filmsWatched.find(
        film => film.id === Number(addWatched.dataset.id)
      );
      if (repeatedFilm) {
        deleteFilm({ filmsWatched, repeatedFilm, addWatched });
        return;
      }
      if (currentFilm) {
        LocalStorage.setItem('filmsWatched', [...filmsWatched, currentFilm]);
      }
    } else {
      if (currentFilm) {
        LocalStorage.setItem('filmsWatched', [currentFilm]);
      }
    }
    addWatched.textContent = 'DELETE TO WATCHED';
  }
}
/**
 * если фильм в просмотренных пишем DELETE
 */
function textContentBtnDelete(addWatched) {
  const filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));
  if (filmsWatched) {
    const repeatedFilm = filmsWatched.find(
      film => film.id === Number(addWatched.dataset.id)
    );
    if (repeatedFilm) {
      addWatched.textContent = 'DELETE TO WATCHED';
    }
  }
}
///////////////////////////////////////////////////////////////////////////
/**
 * удалить фильм из локал стореджа
 */
function deleteFilm({ filmsWatched, repeatedFilm, addWatched }) {
  const currentFilmindex = filmsWatched.findIndex(
    film => film === repeatedFilm
  );
  filmsWatched.splice(currentFilmindex, 1);
  localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  addWatched.textContent = 'add to watched';
}
///////////////////////////////////////////////////////////////////////////
