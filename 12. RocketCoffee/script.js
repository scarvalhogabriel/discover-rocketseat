let menuButton = document.getElementById('menu-button')
let mobileMenu = document.getElementById('mobile-menu')

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})
