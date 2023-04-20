import '../api/themoviedb-api';
import { Themoviedb } from '../api/themoviedb-api';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { LocalStorage } from '../utils';
import { renderCards } from '../utils/index';
import PaginationOption from '../pagination/paginationHome';

const formRef = document.querySelector('#search-form');
const filmsListRef = document.querySelector('.films__list');
const spiner = document.querySelector('.bcdrop-spiner');
const errorRef = document.querySelector('.search-error');
const paginationRef = document.querySelector('#pagination');

const themoviedb = new Themoviedb();

formRef.addEventListener('submit', onSubmitForm);

async function onSubmitForm(e) {
  e.preventDefault();
  let inputValue = e.target.elements.searchQuery.value;
  if (inputValue.trim() === '') {
    errorRef.classList.remove('hidden');
    return;
  }
  errorRef.classList.add('hidden');
  themoviedb.setPage(1);
  const result = await searchResponse(inputValue);
  const paginationOption = new PaginationOption(result);
  paginationOption.pagination.on('afterMove', async ({ page }) => {
    filmsListRef.innerHTML = '';
    themoviedb.setPage(page);
    await searchResponse(inputValue);
  });

  filmsListRef.innerHTML = '';
}
async function searchResponse(inputValue) {
  try {
    spiner.classList.add('visible');
    const filmArray = await themoviedb.fetchSearcFilms(inputValue);
    localStorage.setItem('all-films', JSON.stringify(filmArray));
    const allFilms = JSON.parse(localStorage.getItem('all-films')).results;
    /**
     * Пришли ли фильмы с бекенда
     */
    if (!filmArray || !filmArray.results) {
      return [];
    }
    const allGenres = LocalStorage.getItem('all-geners').genres;
    themoviedb.setResults(filmArray.results.length);
    paginationRef.style = 'display:flex';
    /**
     * Когда фильмы закончились
     */
    if (
      themoviedb.getResults() >= filmArray.total_results &&
      filmArray.total_results !== 0
    ) {
      themoviedb.setPage(1);
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
    /**
     * Если фильмов нет
     */
    if (!filmArray.results.length) {
      paginationRef.style = 'display:none';
      errorRef.classList.remove('hidden');
    }
    renderCards({ allFilms, allGenres });
    spiner.classList.remove('visible');
    /**
     * Pagination
     */

    return filmArray.total_results;
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, an error occurred while fetching films. Please try again later.'
    );
    console.error(error);
    return [];
  }
}
/**
 * Pagination
 */
