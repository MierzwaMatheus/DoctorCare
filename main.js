window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se sessão passou da linha imaginária
  // quais dados vou precisar
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndsPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndsPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navigation = document.getElementById('navigation')

  if(scrollY > 0) {
    navigation.classList.add('scroll')
    
  } else { navigation.classList.remove('scroll')
  } 
}

function showBackToTopOnScroll() {
  const backToTop = document.getElementById('backToTop')

  if(scrollY > 400) {
    backToTop.classList.add('show')
    
  } else { backToTop.classList.remove('show')
  } 
}

function openMenu() {
  document.body.classList.add('menu-expand')
}

function closeMenu() {
  document.body.classList.remove('menu-expand')
}


ScrollReveal({
  origin: 'top', distance: '30px', duration: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services
#services header,
#services .cards,
#about,
#about header,
#about .content`)