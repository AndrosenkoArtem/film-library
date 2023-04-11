import { PopularFilm } from '../api/popular-films-api';
import { PopularFilmsGenres } from '../api/film-gener-api';

const popularFilm = new PopularFilm();
const popularFilmsGenres = new PopularFilmsGenres();
const filmsListRef = document.querySelector('.films__list');
filmApiResponse();

async function filmApiResponse() {
  const popularFilmResolte = await popularFilm.fetchUrl();
  const allFilms = popularFilmResolte.results;
  const allGenres = await generApiResponse();

  createCards({ allFilms, allGenres });
  return popularFilmResolte;
}
async function renderCards({ allFilms, allGenres }) {
  const films = await allFilms;
  const geners = await allGenres;

  return films
    .map(film => {
      const newArray = [];
      geners.map(gener => {
        if (film.genre_ids.includes(gener.id)) {
          newArray.push(gener.name);
        }
      });
      return `
       <li class="films__item">
              <div class="films__card">
                <div class="films__img-container">
                  <img
                    class="films__img"
                    src="https://image.tmdb.org/t/p/original/${film.poster_path}"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div class="info">
                  <p class="info__title">${film.title}</p>
                  <p class="info__subtitle">${newArray}</p>
                </div>
              </div>
        </li> 
      `;
    })
    .join('');
}
async function createCards(response) {
  const filmCard = await renderCards(response);
  filmsListRef.insertAdjacentHTML('beforeend', filmCard);
}

async function generApiResponse() {
  const response = await popularFilmsGenres.fetchUrl();
  return response.genres;
}
