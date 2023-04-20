import { render } from '../utils/index';
import ImagePlaceholder from '../../images/thumbnail.jpg';

export async function renderCards(response) {
  const filmsListRef = document.querySelector('.films__list');
  const filmCard = await createCard(response);
  render(filmsListRef, filmCard);
}
async function createCard({ allFilms, allGenres }) {
  const films = await allFilms;
  const geners = await allGenres;

  return films
    .map(film => {
      const filmGeners = [];
      pushGenerInFilmGeners({ geners, filmGeners, film });
      addOtherInFilmgeners(filmGeners);
      const filmGenerSpace = filmGeners.join(', ');
      return marcapCard({ film, filmGenerSpace });
    })
    .join('');
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
        <div class="films__card" data-id="${film.id}">
            <button class="youtube-button">
              <svg style="pointer-events: none" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 158 110" enable-background="new 0 0 158 110" xml:space="preserve">
                <path id="XMLID_142_" fill="#FF0000" d="M154.4,17.5c-1.8-6.7-7.1-12-13.9-13.8C128.2,0.5,79,0.5,79,0.5s-48.3-0.2-60.6,3
                c-6.8,1.8-13.3,7.3-15.1,14C0,29.7,0.3,55,0.3,55S0,80.3,3.3,92.5c1.8,6.7,8.4,12.2,15.1,14c12.3,3.3,60.6,3,60.6,3s48.3,0.2,60.6-3
                c6.8-1.8,13.1-7.3,14.9-14c3.3-12.1,3.3-37.5,3.3-37.5S157.7,29.7,154.4,17.5z"/>
                <polygon id="XMLID_824_" fill="#FFFFFF" points="63.9,79.2 103.2,55 63.9,30.8 "/>
              </svg>
              </button>
            <div class="films__img-container">
                <img
                data-id="${film.id}"
                class="films__img"
                src="${
                  film.poster_path
                    ? 'https://image.tmdb.org/t/p/w500/' + film.poster_path
                    : ImagePlaceholder
                }"
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
