/*-----------burger menu----------------------*/

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

/*-----------validation----------------------*/


function validation(form) {
    let result = true

    let inputsArr = []
    let inputs = form.getElementsByClassName('mess')
    for (let i = 0; i < inputs.length; i++) {
        inputsArr.push(inputs[i])
    }

    inputsArr.forEach(input => {
        removeError(input)
        if (input.value === '') {
            createError(input, 'Поле не заполнено')
            result = false
        }
    })

    const checkBox = document.getElementById('checkbox')
    removeCheckboxError(checkBox)
    if (checkBox.checked === false) {
        readPrivacyPolicy(checkBox, 'Ознакомтесь с политикой конфиденциальности!')
        result = false
    }
    return result
}

const messageForm = document.getElementById('message-form')
messageForm.addEventListener('submit', sendMeMessage)

function sendMeMessage(event) {
    event.preventDefault()

    if (validation(this) === true) {
        alert('Сообщение отправлено')
        clearInput()
    }
}

function createError(input, text) {
    const parent = input.parentNode //fieldset
    parent.classList.add('error') //fieldset
    const grandparent = parent.parentNode

    const errorText = document.createElement('span')
    errorText.classList.add('error-span')
    errorText.append(text)
    grandparent.append(errorText)
}

function removeError(input) {
    const parent = input.parentNode //fieldset
    const grandparent = parent.parentNode

    if (parent.classList.contains('error')) {
        grandparent.querySelector('span').remove()
        parent.classList.remove('error')
    }
}

function readPrivacyPolicy(input, text) {
    const parent = input.parentNode
    parent.classList.add('error-checkbox')

    const errorText = document.createElement('span')
    errorText.classList.add('error-span')
    errorText.append(text)

    parent.append(errorText)
}

function removeCheckboxError(input) {
    const parent = input.parentNode
    if (parent.classList.contains('error-checkbox')) {
        parent.querySelector('.error-span').remove()
        parent.classList.remove('error-checkbox')
    }
}

function clearInput() {
    const inputArr = []

    let allInputs = document.getElementsByClassName('mess')
    for (let i = 0; i < allInputs.length; i++) {
        inputArr.push(allInputs[i])
        inputArr[i].value = ''
    }

    const checkBox = document.getElementById('checkbox')
    checkBox.checked = false
}

