import '../api/themoviedb-api';
import { Themoviedb } from '../api/themoviedb-api';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const formRef = document.querySelector('#search-form');
const filmsListRef = document.querySelector('.films__list');

formRef.addEventListener('submit', onSubmitForm);

const themoviedb = new Themoviedb();

function onSubmitForm(e) {
  e.preventDefault();
  let inputValue = e.target.elements.searchQuery.value;
  if (inputValue.trim() === '') {
    return;
  }

  themoviedb.resetResults();
  themoviedb.resetPage();
  pixabeyResponse(inputValue);
  filmsListRef.innerHTML = '';
}
async function pixabeyResponse(inputValue) {
  try {
    const allFilms = await themoviedb.fetchUrl(inputValue);
    localStorage.setItem('all-films', JSON.stringify(allFilms));

    if (!allFilms || !allFilms.results) {
      return [];
    }
    const allGenres = JSON.parse(localStorage.getItem('all-geners')).genres;

    themoviedb.setResults(allFilms.results.length);
    // console.log(themoviedb.getPage());
    // console.log(allFilms.total_results);
    // console.log(themoviedb.getResults());

    if (
      themoviedb.getResults() >= allFilms.total_results &&
      allFilms.total_results !== 0
    ) {
      themoviedb.resetPage();
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
    const films = await allFilms.results;
    if (allFilms.results.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.'
      );
    }
    createCard({ allFilms: films, allGenres });
    return films;
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, an error occurred while fetching films. Please try again later.'
    );
    console.error(error);
    return [];
  }
}
async function renderCards({ allFilms, allGenres }) {
  const films = await allFilms;
  const geners = await allGenres;

  return films
    .map(film => {
      const filmGeners = [];
      pushGenerInFilmGeners({ geners, filmGeners, film });
      addOtherInFilmgeners(filmGeners);
      const filmGenerSpace = filmGeners.join(', ');
      return murcapCard({ film, filmGenerSpace });
    })
    .join('');
}
async function createCard({ allFilms, allGenres }) {
  const filmCard = await renderCards({ allFilms, allGenres });
  filmsListRef.insertAdjacentHTML('beforeend', filmCard);

  if (themoviedb.getPage() !== 1) {
    scrollPage();
    return;
  } else if (themoviedb.getTotal_results().total_results !== 0) {
    Notiflix.Notify.info(
      `We found ${themoviedb.getTotal_results().total_results} films.`
    );
  }
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
async function onRenderMoreCards() {
  if (formRef.elements.searchQuery.value.trim() === '') {
    return;
  }

  themoviedb.setPage(1);
  const films = await pixabeyResponse(formRef.elements.searchQuery.value);
  createCard(films);
}
function scrollPage() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
