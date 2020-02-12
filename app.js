const buttons = document.querySelectorAll('.nav__button')
const navLinks = document.querySelector('.nav__links')

buttons.forEach(button=>{
  button.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav__links--show')
    buttons.forEach(button=>{
      button.classList.toggle('util-hide')
    })
  })
})
