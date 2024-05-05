const menu = document.getElementById('menu')
const burger = document.getElementById('burger')
const closingCross = document.getElementById('close-menu')
const menuLink = document.getElementsByClassName('menu_link')
const portfolioBtn = document.getElementById('portfolio')
const aboutMeA = document.getElementById('aboutMeA')

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', closeMenu)
}
const socialNetworks = document.getElementById('social')
const body = document.body

burger.addEventListener('click', openMenu)
closingCross.addEventListener('click', closeMenu)


function openMenu() {
    menu.classList.remove('no-active')
    socialNetworks.classList.add('no-active')
    body.classList.add('lock')
    burger.classList.add('avoid-click')
    portfolioBtn.classList.add('avoid-click')
    aboutMeA.classList.add('avoid-click')
}

function closeMenu() {
    menu.classList.add('no-active')
    socialNetworks.classList.remove('no-active')
    body.classList.remove('lock')
    burger.classList.remove('avoid-click')
    portfolioBtn.classList.remove('avoid-click')
    aboutMeA.classList.remove('avoid-click')
}

const anchors = document.querySelectorAll('a[href*="#"]')
anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault()
        const blockID = anchor.getAttribute('href').substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})