function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},l=n.parcelRequire54b5;function a(e,t){e.insertAdjacentHTML("beforeend",t)}null==l&&((l=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){s[e]=t},n.parcelRequire54b5=l),l.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var l={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)l[t[n]]=e[t[n]]},s=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l("kyEFX").register(JSON.parse('{"1zJhX":"library-page.ac15a2af.js","c2tf3":"thumbnail.cedc50af.jpg"}'));var r={setItem:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getItem:function(e){return JSON.parse(localStorage.getItem(e))}},o={};o=new URL(l("kyEFX").resolve("c2tf3"),import.meta.url).toString();const c=document.querySelector(".films__list");async function d(e){const n=await async function({allFilms:e,allGenres:n}){const i=await e,s=await n;return i.map((e=>{const n=[];!function({geners:e,filmGeners:t,film:n}){e.map((e=>{n.genre_ids.includes(e.id)&&t.push(e.name)}))}({geners:s,filmGeners:n,film:e}),function(e){e.length>2&&(e.splice(2),e.push("Other"))}(n);return function({film:e,filmGenerSpace:n}){const i=e.release_date.substr(0,4);return`\n       <li class="films__item" >\n        <div class="films__card">\n            <div class="films__img-container">\n                <img\n                data-id="${e.id}"\n                class="films__img"\n                src="${e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:t(o)}"\n                alt="${e.title}"\n                loading="lazy"\n                />\n            </div>\n            <div class="info">\n                <p class="info__title">${e.title}</p>\n                <p class="info__subtitle">${n} | ${i}</p>\n            </div>\n        </div>\n       </li> \n      `}({film:e,filmGenerSpace:n.join(", ")})})).join("")}(e);a(c,n)}function u(e,t){return`\n        <div class="modal-img-container">\n          <img\n            class="modal-img"\n            src="https://image.tmdb.org/t/p/w500/${e.poster_path}"\n            alt="${m(e.title)}"\n          />\n        </div>\n        <div class="description">\n          <h1 class="description__title">${m(e.title)}</h1>\n          <div class="info-stats">\n            <ul class="info-stats__list">\n              <li class="info-stats__item">\n                <p class="info-stats__subtitle">Vote / Votes</p>\n              </li>\n              <li class="info-stats__item">\n                <p class="info-stats__subtitle">Popularity</p>\n              </li>\n              <li class="info-stats__item">\n                <p class="info-stats__subtitle">Original Title</p>\n              </li>\n              <li class="info-stats__item">\n                <p class="info-stats__subtitle">Genre</p>\n              </li>\n            </ul>\n            <ul class="stats">\n              <li class="stats__item">\n                <p class="stats__subtitle">\n                  <span class="rating">${m(e.vote_average.toFixed(1))}</span>\n                  <span class="rating__or">/</span>\n                  <span class="rating rating--white">${m(e.vote_count)}</span>\n                </p>\n              </li>\n              <li class="stats__item"><p class="stats__subtitle">${m(e.popularity.toFixed(1))}</p></li>\n              <li class="stats__item">\n                <p class="stats__subtitle">${m(e.original_title)}</p>\n              </li>\n              <li class="stats__item">\n                <p class="stats__subtitle">${m(t.join(", "))}</p>\n              </li>\n            </ul>\n          </div>\n          <h2 class="about">About</h2>\n          <p class="about__description">\n             ${m(e.overview)}\n          </p>\n          <button class="add-button add-watched-js" type="button" data-id="${e.id}">add to Watched</button>\n          <button class="add-button add-queue-js" type="button" data-id="${e.id}">add to queue</button>\n        </div>\n    `}function m(e){return 0===e.length?"No information":e}function f(){const e=document.querySelector(".add-watched-js");!function(e){const t=JSON.parse(localStorage.getItem("filmsWatched"));if(t){t.find((t=>t.id===Number(e.dataset.id)))&&(e.textContent="DELETE TO WATCHED")}}(e),e.addEventListener("click",(function(){const t=JSON.parse(localStorage.getItem("filmsWatched")),n=r.getItem("all-films").results.find((t=>t.id===Number(e.dataset.id)));if(t){const i=t.find((t=>t.id===Number(e.dataset.id)));if(i)return void function({filmsWatched:e,repeatedFilm:t,addWatched:n}){const i=e.findIndex((e=>e===t));e.splice(i,1),localStorage.setItem("filmsWatched",JSON.stringify(e)),n.textContent="add to watched"}({filmsWatched:t,repeatedFilm:i,addWatched:e});r.setItem("filmsWatched",[...t,n])}else r.setItem("filmsWatched",[n]);e.textContent="DELETE TO WATCHED"}))}function p(){const e=document.querySelector(".add-queue-js");!function(e){const t=JSON.parse(localStorage.getItem("filmsQueue"));if(t){t.find((t=>t.id===Number(e.dataset.id)))&&(e.textContent="delete to watched")}}(e),e.addEventListener("click",(function(){const t=JSON.parse(localStorage.getItem("filmsQueue")),n=r.getItem("all-films").results.find((t=>t.id===Number(e.dataset.id)));if(t){const i=t.find((t=>t.id===Number(e.dataset.id)));if(i)return void function({filmsQueue:e,repeatedFilm:t,addQueue:n}){const i=e.findIndex((e=>e===t));e.splice(i,1),localStorage.setItem("filmsQueue",JSON.stringify(e)),n.textContent="add to queue"}({filmsQueue:t,repeatedFilm:i,addQueue:e});r.setItem("filmsQueue",[...t,n])}else r.setItem("filmsQueue",[n]);e.textContent="DELETE TO WATCHED"}))}const g={filmList:document.querySelector(".films__list"),backdrop:document.querySelector(".modal-backdrop"),modalContainer:document.querySelector(".modal-container")};function b(e){const t=r.getItem("all-films");if("films__img"!==e.target.className)return;const n=function(e){const t=[];return function(e,t){r.getItem("all-geners").genres.map((n=>{e.genre_ids.includes(n.id)&&t.push(n.name)}))}(e,t),u(e,t)}(t.results.find((t=>parseInt(t.id)===parseInt(e.target.dataset.id))));a(g.modalContainer,n),f(),p();document.querySelector(".button-close").addEventListener("click",_),g.backdrop.classList.add("active"),document.body.style="overflow: hidden",g.backdrop.addEventListener("click",y),window.addEventListener("keydown",v)}function _(e){"custom-icon"===e.target.className&&S()}function y(e){"modal-backdrop active"===e.target.className&&(S(),g.backdrop.removeEventListener("click",y))}function v(e){"Escape"===e.key&&(g.backdrop.classList.remove("active"),g.modalContainer.innerHTML='\n    <button class="button-close" type="button">\n        <div class="custom-icon"></div>\n    </button>',window.removeEventListener("keydown",v))}function S(){g.backdrop.classList.remove("active"),document.body.style="",g.modalContainer.innerHTML='\n    <button class="button-close" type="button">\n        <div class="custom-icon"></div>\n    </button>';const e=document.querySelector(".film--library");e&&function(e){const t=document.querySelector(".films__list"),n=document.querySelector(".film-section"),i=document.querySelector(".library-container"),s=document.querySelector("[data-watched]"),l=document.querySelector("[data-queue]");let a=null;s.classList.contains("is-active")&&(a=JSON.parse(localStorage.getItem("filmsWatched")));l.classList.contains("is-active")&&(a=JSON.parse(localStorage.getItem("filmsQueue")));const r=JSON.parse(localStorage.getItem("all-geners")).genres;if(!a||0===a.length)return t.innerHTML="",i.innerHTML='<h1 class="film-title">Your list is empty</h1><ul class="film film--library"></ul>',void n.classList.add("library-plug");e.innerHTML="",d({allFilms:a,allGenres:r})}(e)}const h={filmList:document.querySelector(".films__list"),watchedBtn:document.querySelector("[data-watched]"),queueBtn:document.querySelector("[data-queue]"),filmTitle:document.querySelector(".film-title"),filmSection:document.querySelector(".film-section"),libraryContainer:document.querySelector(".library-container")};h.watchedBtn.addEventListener("click",(async function(e){const t=JSON.parse(localStorage.getItem("filmsWatched")),n=JSON.parse(localStorage.getItem("all-geners")).genres;if(h.filmList.innerHTML="",h.watchedBtn.classList.add("is-active"),h.queueBtn.classList.remove("is-active"),b(e),h.filmList.removeEventListener("click",b),h.filmList.addEventListener("click",b),!t||0===t.length)return h.filmList.innerHTML="",h.libraryContainer.innerHTML='<h1 class="film-title">Your list is empty</h1><ul class="film film--library"></ul>',void h.filmSection.classList.add("library-plug");h.filmSection.classList.remove("library-plug"),h.filmTitle.remove(),d({allFilms:t,allGenres:n})}));const L={filmList:document.querySelector(".films__list"),watchedBtn:document.querySelector("[data-watched]"),queueBtn:document.querySelector("[data-queue]"),filmTitle:document.querySelector(".film-title"),filmSection:document.querySelector(".film-section"),libraryContainer:document.querySelector(".library-container")};L.queueBtn.addEventListener("click",(async function(e){const t=JSON.parse(localStorage.getItem("filmsQueue")),n=JSON.parse(localStorage.getItem("all-geners")).genres;if(L.filmList.innerHTML="",L.queueBtn.classList.add("is-active"),L.watchedBtn.classList.remove("is-active"),b(e),L.filmList.removeEventListener("click",b),L.filmList.addEventListener("click",b),!t||0===t.length)return L.filmList.innerHTML="",L.libraryContainer.innerHTML='<h1 class="film-title">Your list is empty</h1><ul class="film film--library"></ul>',void L.filmSection.classList.add("library-plug");L.filmSection.classList.remove("library-plug"),L.filmTitle.remove(),d({allFilms:t,allGenres:n})}));
//# sourceMappingURL=library-page.ac15a2af.js.map
