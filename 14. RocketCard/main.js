let userName = 'scarvalhogabriel'
const btnSendUser = document.querySelector('#sendUser')

btnSendUser.addEventListener('click', function (event) {
  event.preventDefault()

  var input = document.querySelector('#name')

  userName = input.value

  function getGitHubInfo() {
    const gitHubUrl = `https://api.github.com/users/${userName}`

    fetch(gitHubUrl)
      .then(response => response.json())
      .then(data => {
        userAvatar.src = data.avatar_url
        login.textContent = data.login
        followers.textContent = data.followers
        following.textContent = data.following
        repos.textContent = data.public_repos
        company.textContent = data.company
        userLocation.innerHTML = data.location
      })
      .catch(error => console.error(error))
  }

  getGitHubInfo()
})

function getGitHubInfo() {
  const gitHubUrl = `https://api.github.com/users/${userName}`

  fetch(gitHubUrl)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      login.textContent = data.login
      followers.textContent = data.followers
      following.textContent = data.following
      repos.textContent = data.public_repos
      company.textContent = data.company
      userLocation.innerHTML = data.location
    })
    .catch(error => console.error(error))
}

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btnBackground = document.querySelector('#btnBackground')

function randomColor() {
  return Math.floor(Math.random() * hex.length)
}

btnBackground.addEventListener('click', function () {
  let hexColor = '#'

  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomColor()]
  }

  document.querySelector('.bg-card').style.backgroundColor = hexColor
})

getGitHubInfo()
