import ImagePlaceholder from '../../images/thumbnail.jpg';
/**
 * Modal template.
 * @param {Object} currentFilm
 * @param {Array} filmGeners
 */
export default function marcapModal(currentFilm, filmGeners) {
  return `
        <div class="modal-img-container">
          <img
            class="modal-img"
            src="${
              currentFilm.poster_path
                ? 'https://image.tmdb.org/t/p/w500/' + currentFilm.poster_path
                : ImagePlaceholder
            }"
            alt="${addAudit(currentFilm.title)}"
          />
        </div>
        <div class="description">
          <h1 class="description__title">${addAudit(currentFilm.title)}</h1>
          <div class="info-stats">
            <ul class="info-stats__list">
              <li class="info-stats__item">
                <p class="info-stats__subtitle">Vote / Votes</p>
              </li>
              <li class="info-stats__item">
                <p class="info-stats__subtitle">Popularity</p>
              </li>
              <li class="info-stats__item">
                <p class="info-stats__subtitle">Original Title</p>
              </li>
              <li class="info-stats__item">
                <p class="info-stats__subtitle">Genre</p>
              </li>
            </ul>
            <ul class="stats">
              <li class="stats__item">
                <p class="stats__subtitle">
                  <span class="rating">${addAudit(
                    currentFilm.vote_average.toFixed(1)
                  )}</span>
                  <span class="rating__or">/</span>
                  <span class="rating rating--white">${addAudit(
                    currentFilm.vote_count
                  )}</span>
                </p>
              </li>
              <li class="stats__item"><p class="stats__subtitle">${addAudit(
                currentFilm.popularity.toFixed(1)
              )}</p></li>
              <li class="stats__item">
                <p class="stats__subtitle">${addAudit(
                  currentFilm.original_title
                )}</p>
              </li>
              <li class="stats__item">
                <p class="stats__subtitle">${addAudit(
                  filmGeners.join(', ')
                )}</p>
              </li>
            </ul>
          </div>
          <h2 class="about">About</h2>
          <p class="about__description">
             ${addAudit(currentFilm.overview)}
          </p>
          <button class="add-button add-watched-js" type="button" data-id="${
            currentFilm.id
          }">add to Watched</button>
          <button class="add-button add-queue-js" type="button" data-id="${
            currentFilm.id
          }">add to queue</button>
        </div>
    `;
}

function addAudit(data) {
  if (data.length === 0) {
    return 'No information';
  }
  return data;
}
