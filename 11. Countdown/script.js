let subscribeButton = document.getElementById('subscribe-btn')
let modalBox = document.querySelector('.modal')
let countDown = document.querySelector('.wrapper')

subscribeButton.addEventListener('click', function () {
  modalBox.classList.add('active')
  countDown.classList.add('active')
})

let subscribeModalButton = document.getElementById('subscribe-btn-modal')

subscribeModalButton.addEventListener('click', function () {
  modalBox.classList.remove('active')
  countDown.classList.remove('active')
})
