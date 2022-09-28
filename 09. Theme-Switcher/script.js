const checkbox = document.querySelector('input')
const body = document.querySelector('body')

checkbox.addEventListener('click', function () {
  body.classList.toggle('dark-mode')
})
