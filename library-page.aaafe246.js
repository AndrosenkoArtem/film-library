function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},l=n.parcelRequire54b5;function o(e,t){e.insertAdjacentHTML("beforeend",t)}null==l&&((l=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){s[e]=t},n.parcelRequire54b5=l),l.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var l={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)l[t[n]]=e[t[n]]},s=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l("kyEFX").register(JSON.parse('{"1zJhX":"library-page.aaafe246.js","c2tf3":"thumbnail.cedc50af.jpg"}'));var r={setItem:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getItem:function(e){return JSON.parse(localStorage.getItem(e))}},a={};async function c(e){o(document.querySelector(".films__list"),await async function({allFilms:e,allGenres:n}){const i=await e,s=await n;return i.map((e=>{const n=[];!function({geners:e,filmGeners:t,film:n}){e.map((e=>{n.genre_ids.includes(e.id)&&t.push(e.name)}))}({geners:s,filmGeners:n,film:e}),function(e){e.length>2&&(e.splice(2),e.push("Other"))}(n);return function({film:e,filmGenerSpace:n}){const i=e.release_date.substr(0,4);return`\n       <li class="films__item" >\n        <div class="films__card" data-id="${e.id}">\n            <button class="youtube-button">\n              <svg style="pointer-events: none" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n                viewBox="0 0 158 110" enable-background="new 0 0 158 110" xml:space="preserve">\n                <path id="XMLID_142_" fill="#FF0000" d="M154.4,17.5c-1.8-6.7-7.1-12-13.9-13.8C128.2,0.5,79,0.5,79,0.5s-48.3-0.2-60.6,3\n                c-6.8,1.8-13.3,7.3-15.1,14C0,29.7,0.3,55,0.3,55S0,80.3,3.3,92.5c1.8,6.7,8.4,12.2,15.1,14c12.3,3.3,60.6,3,60.6,3s48.3,0.2,60.6-3\n                c6.8-1.8,13.1-7.3,14.9-14c3.3-12.1,3.3-37.5,3.3-37.5S157.7,29.7,154.4,17.5z"/>\n                <polygon id="XMLID_824_" fill="#FFFFFF" points="63.9,79.2 103.2,55 63.9,30.8 "/>\n              </svg>\n              </button>\n            <div class="films__img-container">\n                <img\n                data-id="${e.id}"\n                class="films__img"\n                src="${e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:t(a)}"\n                alt="${e.title}"\n                loading="lazy"\n                />\n            </div>\n            <div class="info">\n                <p class="info__title">${e.title}</p>\n                <p class="info__subtitle">${n} | ${i}</p>\n            </div>\n        </div>\n       </li> \n      `}({film:e,filmGenerSpace:n.join(", ")})})).join("")}(e))}function d(e,n){return`\n        <div class="modal-img-container">\n          <img\n            class="modal-img"\n            src="${e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:t(a)}"\n            alt="${u(e.title)}"\n          />\n        </div>\n        <div class="description">\n          <h1 class="description__title">${u(e.title)}</h1>\n          <div class="info-stats">\n            <ul class="info-stats__list">\n              <li class="info-stats__item">\n                <p class="info-stats__subtitle">Vote / Votes</p>\n              </li>\n              <li class="info-stats__item">\n                <p class="info-stats__subtitle">Popularity</p>\n              </li>\n              <li class="info-stats__item">\n                <p class="info-stats__subtitle">Original Title</p>\n              </li>\n              <li class="info-stats__item">\n                <p class="info-stats__subtitle">Genre</p>\n              </li>\n            </ul>\n            <ul class="stats">\n              <li class="stats__item">\n                <p class="stats__subtitle">\n                  <span class="rating">${u(e.vote_average.toFixed(1))}</span>\n                  <span class="rating__or">/</span>\n                  <span class="rating rating--white">${u(e.vote_count)}</span>\n                </p>\n              </li>\n              <li class="stats__item"><p class="stats__subtitle">${u(e.popularity.toFixed(1))}</p></li>\n              <li class="stats__item">\n                <p class="stats__subtitle">${u(e.original_title)}</p>\n              </li>\n              <li class="stats__item">\n                <p class="stats__subtitle">${u(n.join(", "))}</p>\n              </li>\n            </ul>\n          </div>\n          <h2 class="about">About</h2>\n          <p class="about__description">\n             ${u(e.overview)}\n          </p>\n          <div class="center">\n          <button class="add-button add-watched-js" type="button" data-id="${e.id}">add to Watched</button>\n          <button class="add-button add-queue-js" type="button" data-id="${e.id}">add to queue</button>\n          </div>\n        </div>\n    `}function u(e){return 0===e.length?"No information":e}function m(){const e=document.querySelector(".add-watched-js");!function(e){const t=JSON.parse(localStorage.getItem("filmsWatched"));if(t){t.find((t=>t.id===Number(e.dataset.id)))&&(e.textContent="DELETE TO WATCHED")}}(e),e.addEventListener("click",(function(){const t=JSON.parse(localStorage.getItem("filmsWatched")),n=r.getItem("all-films"),i=n?.results?.find((t=>t.id===Number(e.dataset.id)));if(t){const n=t.find((t=>t.id===Number(e.dataset.id)));if(n)return void function({filmsWatched:e,repeatedFilm:t,addWatched:n}){const i=e.findIndex((e=>e===t));e.splice(i,1),localStorage.setItem("filmsWatched",JSON.stringify(e)),n.textContent="add to watched"}({filmsWatched:t,repeatedFilm:n,addWatched:e});i&&r.setItem("filmsWatched",[...t,i])}else i&&r.setItem("filmsWatched",[i]);e.textContent="DELETE TO WATCHED"}))}function f(){const e=document.querySelector(".add-queue-js");!function(e){const t=JSON.parse(localStorage.getItem("filmsQueue"));if(t){t.find((t=>t.id===Number(e.dataset.id)))&&(e.textContent="delete to queue")}}(e),e.addEventListener("click",(function(){const t=JSON.parse(localStorage.getItem("filmsQueue")),n=r.getItem("all-films"),i=n?.results?.find((t=>t.id===Number(e.dataset.id)));if(t){const n=t.find((t=>t.id===Number(e.dataset.id)));if(n)return void function({filmsQueue:e,repeatedFilm:t,addQueue:n}){const i=e.findIndex((e=>e===t));e.splice(i,1),localStorage.setItem("filmsQueue",JSON.stringify(e)),n.textContent="add to queue"}({filmsQueue:t,repeatedFilm:n,addQueue:e});i&&r.setItem("filmsQueue",[...t,i])}else i&&r.setItem("filmsQueue",[i]);e.textContent="DELETE TO QUEUE"}))}a=new URL(l("kyEFX").resolve("c2tf3"),import.meta.url).toString();const p={filmList:document.querySelector(".films__list"),backdrop:document.querySelector(".modal-backdrop"),modalContainer:document.querySelector(".modal-container")};function y(e){const t=document.querySelector(".film--library"),n=document.querySelector("[data-watched]"),i=document.querySelector("[data-queue]");let s=null;if(t&&(n.classList.contains("is-active")&&(s=JSON.parse(localStorage.getItem("filmsWatched"))),i.classList.contains("is-active")&&(s=JSON.parse(localStorage.getItem("filmsQueue"))),"films__img"!==e.target.className))return;const l=s?.find((t=>parseInt(t.id)===parseInt(e.target.dataset.id))),a=function(e){const t=[];return function(e,t){r.getItem("all-geners").genres.map((n=>{e.genre_ids.includes(n.id)&&t.push(n.name)}))}(e,t),d(e,t)}(l);o(p.modalContainer,a);document.querySelectorAll(".youtube-button").forEach((e=>e.style="display:none")),document.body.style="overflow: hidden",m(),f();document.querySelector(".button-close").addEventListener("click",b),p.backdrop.classList.add("active"),p.backdrop.addEventListener("click",v),window.addEventListener("keydown",_)}function b(e){"custom-icon"===e.target.className&&g()}function v(e){"modal-backdrop active"===e.target.className&&(g(),p.backdrop.removeEventListener("click",v))}function _(e){"Escape"===e.key&&(p.backdrop.classList.remove("active"),p.modalContainer.innerHTML='\n    <button class="button-close" type="button">\n        <div class="custom-icon"></div>\n    </button>',window.removeEventListener("keydown",_))}function g(){p.backdrop.classList.remove("active"),document.body.style="",p.modalContainer.innerHTML='\n    <button class="button-close" type="button">\n        <div class="custom-icon"></div>\n    </button>';document.querySelectorAll(".youtube-button").forEach((e=>e.style="display:block"));const e=document.querySelector(".film--library");e&&function(e){const t=document.querySelector(".films__list"),n=document.querySelector(".film-section"),i=document.querySelector(".library-container"),s=document.querySelector("[data-watched]"),l=document.querySelector("[data-queue]");let o=null;s.classList.contains("is-active")&&(o=JSON.parse(localStorage.getItem("filmsWatched")));l.classList.contains("is-active")&&(o=JSON.parse(localStorage.getItem("filmsQueue")));const r=JSON.parse(localStorage.getItem("all-geners")).genres;if(!o||0===o.length)return t.innerHTML="",i.innerHTML='<h1 class="film-title">Your list is empty</h1><ul class="films__list film--library"></ul>',void n.classList.add("library-plug");e.innerHTML="",c({allFilms:o,allGenres:r})}(e)}const S={filmList:document.querySelector(".films__list"),watchedBtn:document.querySelector("[data-watched]"),queueBtn:document.querySelector("[data-queue]"),filmTitle:document.querySelector(".film-title"),filmSection:document.querySelector(".film-section"),libraryContainer:document.querySelector(".library-container")};let h=document.querySelector(".films__list");S.watchedBtn.addEventListener("click",(async function(e){h=document.querySelector(".films__list");const t=document.querySelector(".film-title");h.innerHTML="",S.watchedBtn.classList.add("is-active"),S.queueBtn.classList.remove("is-active");const n=JSON.parse(localStorage.getItem("filmsWatched")),i=JSON.parse(localStorage.getItem("all-geners")).genres;if(!n||0===n.length)return S.libraryContainer.innerHTML='<h1 class="film-title">Your list is empty</h1><ul class="films__list film--library"></ul>',h=document.querySelector(".films__list"),S.filmSection.classList.add("library-plug"),void(h.innerHTML="");S.filmSection.classList.remove("library-plug"),t?.remove(),c({allFilms:n,allGenres:i}),y(e),h.removeEventListener("click",y),h.addEventListener("click",y)}));const L={filmList:document.querySelector(".films__list"),watchedBtn:document.querySelector("[data-watched]"),queueBtn:document.querySelector("[data-queue]"),filmTitle:document.querySelector(".film-title"),filmSection:document.querySelector(".film-section"),libraryContainer:document.querySelector(".library-container")};let w=document.querySelector(".films__list");L.queueBtn.addEventListener("click",(async function(e){w=document.querySelector(".films__list");const t=document.querySelector(".film-title");w.innerHTML="",L.queueBtn.classList.add("is-active"),L.watchedBtn.classList.remove("is-active");const n=JSON.parse(localStorage.getItem("filmsQueue")),i=JSON.parse(localStorage.getItem("all-geners")).genres;if(!n||0===n.length)return L.libraryContainer.innerHTML='<h1 class="film-title">Your list is empty</h1><ul class="films__list film--library"></ul>',w=document.querySelector(".films__list"),L.filmSection.classList.add("library-plug"),void(w.innerHTML="");L.filmSection.classList.remove("library-plug"),t?.remove(),c({allFilms:n,allGenres:i}),y(e),w.removeEventListener("click",y),w.addEventListener("click",y)}));const q=document.querySelector(".bcdrop-spiner");async function E(e){try{q.classList.add("visible");const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=14b7b0dab2e9101796b24880530a0048`),n=await t.json();return q.classList.remove("visible"),n.results}catch(e){throw q.classList.remove("visible"),console.error(e),new Error("Error fetching film genres")}}const k=document.querySelector(".films__list"),I=document.querySelector(".films-section");function N(){document.querySelector(".backdrop-trailer").remove(),document.body.style=""}function O(e){const t=document.querySelector(".backdrop-trailer");"backdrop-trailer active"===e.target.className&&(t.remove(),document.body.style="",t.removeEventListener("click",O))}function T(e){const t=document.querySelector(".backdrop-trailer");"Escape"===e.key&&(t.remove(),window.removeEventListener("keydown",T))}k.addEventListener("click",(async function(e){if(e.preventDefault(),!e.target.classList.contains("youtube-button"))return;const t=e.target.closest(".films__card").dataset.id,n=await E(t);if(n.length>=1)!function(e){const t=`<div class="backdrop-trailer"><div class="modal-trailer"><button class="close-modal__trailer"><div class="custom-icon-2 white--custom"></div></button>\n    <iframe class="iframe" fullscreen src="https://www.youtube.com/embed/${e}" frameborder="0"></iframe>\n    </div></div>`;I.insertAdjacentHTML("beforeend",t);document.querySelector(".close-modal__trailer").addEventListener("click",N),window.addEventListener("keydown",T)}(n[0].key);else if(!n.length)return void Notify.warning("There are no trailers for this movie");document.body.style.overflow="hidden";const i=document.querySelector(".backdrop-trailer");i.classList.add("active"),i.addEventListener("click",O)}));
//# sourceMappingURL=library-page.aaafe246.js.map
