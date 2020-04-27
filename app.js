const burgerMenu = document.querySelector('.hamburgerMenu')

const navLinks = document.querySelector('.links')

burgerMenu.addEventListener('click', function(){
  navLinks.classList.toggle('active')
  burgerMenu.classList.toggle('toggle') 
})

const windowWidth = window.matchMedia('(min-width: 600px)');


//Creating a function to clear the toggled menu classes after leaving the mobile query. So if the menu is left open and the viewport is expanded. It will be closed when it has been reduced again.
const clearMobileNav = screen => {
  if(screen.matches) {
    navLinks.classList.remove('active')
    burgerMenu.classList.remove('toggle')
  }
}