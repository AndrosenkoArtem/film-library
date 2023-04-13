import '../api/themoviedb-api';
import { Themoviedb } from '../api/themoviedb-api';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { LocalStorage } from '../utils';
import { renderCards } from '../utils/index';

const formRef = document.querySelector('#search-form');
const filmsListRef = document.querySelector('.films__list');
const spiner = document.querySelector('.bcdrop-spiner');

formRef.addEventListener('submit', onSubmitForm);

const themoviedb = new Themoviedb();

function onSubmitForm(e) {
  e.preventDefault();
  let inputValue = e.target.elements.searchQuery.value;
  if (inputValue.trim() === '') {
    return;
  }
  spiner.classList.add('visible');
  themoviedb.resetResults();
  themoviedb.resetPage();
  searchResponse(inputValue);
  filmsListRef.innerHTML = '';
}
async function searchResponse(inputValue) {
  try {
    const allFilms = await themoviedb.fetchUrl(inputValue);
    localStorage.setItem('all-films', JSON.stringify(allFilms));

    if (!allFilms || !allFilms.results) {
      return [];
    }
    const allGenres = LocalStorage.getItem('all-geners').genres;
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
    } else if (allFilms.results.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.'
      );
    }
    const films = allFilms.results;
    renderCards({ allFilms, allGenres });

    spiner.classList.remove('visible');
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, an error occurred while fetching films. Please try again later.'
    );
    console.error(error);
    return [];
  }
}
// async function onRenderMoreCards() {
//   if (formRef.elements.searchQuery.value.trim() === '') {
//     return;
//   }

//   themoviedb.setPage(1);
//   const films = await searchResponse(formRef.elements.searchQuery.value);
//   createCard(films);
// }
// function scrollPage() {
//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// }
