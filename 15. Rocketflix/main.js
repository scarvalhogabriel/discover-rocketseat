import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

function getMovie() {
  const randomId = Math.floor(Math.random() * 1000) + 1

  const movieUrl = `${BASE_URL}${randomId}?${API_KEY}&${language}`

  fetch(movieUrl)
    .then(response => response.json())
    .then(data => {
      movieSection.innerHTML = `<img src="${IMG_URL + data.poster_path}">

      <div class="movie-description">
          <h3>${data.title}</h3>
          <p>${data.overview}</p>
      </div>`
    })
    .catch(error => console.error(error))
}

document.getElementById('movieChangeBtn').addEventListener('click', getMovie)
