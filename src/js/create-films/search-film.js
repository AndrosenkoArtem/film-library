import '../api/themoviedb-api';
import { PixabeyApi } from '../api/themoviedb-api';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const formRef = document.querySelector('#search-form');
const filmsListRef = document.querySelector('.films__list');

formRef.addEventListener('submit', onSubmitForm);

const pixabeyApi = new PixabeyApi();

function onSubmitForm(e) {
  e.preventDefault();
  let inputValue = e.target.elements.searchQuery.value;
  if (inputValue.trim() === '') {
    return;
  }

  pixabeyApi.resetResults();
  pixabeyApi.resetPage();
  const images = pixabeyResponse(inputValue);
  filmsListRef.innerHTML = '';
  createCard(images);
}

async function pixabeyResponse(inputValue) {
  try {
    const response = await pixabeyApi.fetchUrl(inputValue);
    pixabeyApi.setResults(response.results.length);
    // console.log(pixabeyApi.getPage());
    // console.log(response.total_results);
    // console.log(pixabeyApi.getResults());

    if (
      pixabeyApi.getResults() >= response.total_results &&
      response.total_results !== 0
    ) {
      pixabeyApi.resetPage();
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
    const images = await response.results;
    if (response.results.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return images;
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, an error occurred while fetching images. Please try again later.'
    );
    console.error(error);
    return [];
  }
}

async function renderCards(response) {
  const films = await response;
  return films
    .map(film => {
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
                  <p class="info__title">${film.original_title}</p>
                  <p class="info__subtitle">subnasvanie</p>
                </div>
              </div>
        </li> 
      `;
    })
    .join('');
}

async function createCard(response) {
  const filmCard = await renderCards(response);
  filmsListRef.insertAdjacentHTML('beforeend', filmCard);

  if (pixabeyApi.getPage() !== 1) {
    scrollPage();
    return;
  } else if (pixabeyApi.getTotal_results().total_results !== 0) {
    Notiflix.Notify.info(
      `Hooray! We found ${pixabeyApi.getTotal_results().total_results} images.`
    );
  }
}

async function onRenderMoreCards() {
  if (formRef.elements.searchQuery.value.trim() === '') {
    return;
  }

  pixabeyApi.setPage(1);
  const images = await pixabeyResponse(formRef.elements.searchQuery.value);
  createCard(images);
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
