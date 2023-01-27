// Open Modal
let subscribeButton = document.getElementById('subscribe-btn')
let modalBox = document.querySelector('.modal')
let countDown = document.querySelector('.wrapper')

subscribeButton.addEventListener('click', function () {
  modalBox.classList.add('active')
  countDown.classList.add('active')
})

// Close Modal
let subscribeModalButton = document.getElementById('subscribe-btn-modal')

subscribeModalButton.addEventListener('click', function () {
  modalBox.classList.remove('active')
  countDown.classList.remove('active')
})

// Countdown
let countDownDate = new Date('December 31, 2032').getTime() //Recebo a data em milisegundos

let uptadeEverySecond = setInterval(() => {
  let todayDate = new Date().getTime()

  let timeBetweenDates = countDownDate - todayDate

  let days = Math.floor(timeBetweenDates / (1000 * 60 * 60 * 24))
  let hours = Math.floor(
    (timeBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  let minutes = Math.floor((timeBetweenDates % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeBetweenDates % (1000 * 60)) / 1000)

  if (days < 10) {
    document.getElementById('days').innerHTML = `0${days}`
  } else {
    document.getElementById('days').innerHTML = days
  }

  if (hours < 10) {
    document.getElementById('hours').innerHTML = `0${hours}`
  } else {
    document.getElementById('hours').innerHTML = hours
  }

  if (minutes < 10) {
    document.getElementById('minutes').innerHTML = `0${minutes}`
  } else {
    document.getElementById('minutes').innerHTML = minutes
  }

  if (seconds < 10) {
    document.getElementById('seconds').innerHTML = `0${seconds}`
  } else {
    document.getElementById('seconds').innerHTML = seconds
  }
}, 1000)
