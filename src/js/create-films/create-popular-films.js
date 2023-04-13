import { PopularFilm } from '../api/popular-films-api';
import { PopularFilmsGenres } from '../api/film-gener-api';

const popularFilm = new PopularFilm();
const popularFilmsGenres = new PopularFilmsGenres();
const filmsListRef = document.querySelector('.films__list');

popularFilm.fetchUrl().then(response => {
  localStorage.setItem('all-films', JSON.stringify(response));
});
popularFilmsGenres.fetchUrl().then(response => {
  localStorage.setItem('all-geners', JSON.stringify(response));
  filmApiResponse();
});

async function filmApiResponse() {
  const allFilms = JSON.parse(localStorage.getItem('all-films'));

  if (!allFilms || !allFilms.results) {
    return [];
  }
  const allGenres = JSON.parse(localStorage.getItem('all-geners')).genres;

  createCards({ allFilms, allGenres });
}
async function renderCards({ allFilms, allGenres }) {
  const films = await allFilms;
  const geners = await allGenres;

  return films.results
    .map(film => {
      const filmGeners = [];
      pushGenerInFilmGeners({ geners, filmGeners, film });
      addOtherInFilmgeners(filmGeners);
      const filmGenerSpace = filmGeners.join(', ');
      return murcapCard({ film, filmGenerSpace });
    })
    .join('');
}
async function createCards(response) {
  const filmCard = await renderCards(response);
  filmsListRef.insertAdjacentHTML('beforeend', filmCard);
}
function pushGenerInFilmGeners({ geners, filmGeners, film }) {
  geners.map(gener => {
    if (film.genre_ids.includes(gener.id)) {
      filmGeners.push(gener.name);
    }
  });
}
function addOtherInFilmgeners(filmGeners) {
  if (filmGeners.length > 2) {
    filmGeners.splice(2);
    filmGeners.push('Other');
  }
}
function murcapCard({ film, filmGenerSpace }) {
  const year = film.release_date.substr(0, 4);
  return `
       <li class="films__item">
        <div class="films__card">
            <div class="films__img-container">
                <img
                class="films__img"
                src="https://image.tmdb.org/t/p/w500/${film.poster_path}"
                alt="${film.title}"
                loading="lazy"
                />
            </div>
            <div class="info">
                <p class="info__title">${film.title}</p>
                <p class="info__subtitle">${filmGenerSpace} | ${year}</p>
            </div>
        </div>
       </li> 
      `;
}
