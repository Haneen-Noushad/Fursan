const toggleButton = document.getElementById('togglebtn')
const navbarLinks = document.getElementById('nlink')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  console.log('toggle')
})