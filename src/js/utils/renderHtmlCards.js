import { render } from '../utils/index';

const filmsListRef = document.querySelector('.films__list');

async function createCard({ allFilms, allGenres }) {
  const films = await allFilms;
  const geners = await allGenres;

  return films.results
    .map(film => {
      const filmGeners = [];
      pushGenerInFilmGeners({ geners, filmGeners, film });
      addOtherInFilmgeners(filmGeners);
      const filmGenerSpace = filmGeners.join(', ');
      return marcapCard({ film, filmGenerSpace });
    })
    .join('');
}
export async function renderCards(response) {
  const filmCard = await createCard(response);
  render(filmsListRef, filmCard);
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
function marcapCard({ film, filmGenerSpace }) {
  const year = film.release_date.substr(0, 4);
  return `
       <li class="films__item" >
        <div class="films__card">
            <div class="films__img-container">
                <img
                data-id="${film.id}"
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
