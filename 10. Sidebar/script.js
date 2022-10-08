let menuButton = document.querySelector('#menu-icon-btn')
let sideBarMenu = document.querySelector('nav')
let dashboard = document.querySelector('.dashboard-title')

menuButton.addEventListener('click', function () {
  sideBarMenu.classList.toggle('active')
  dashboard.classList.toggle('active')
})
