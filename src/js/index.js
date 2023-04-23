import '../scss/style.scss'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

//Свайперы
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 190
    },
    532: {
      slidesPerView: 2,
      spaceBetween: 60
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

let swiperClass = document.querySelector('.swiper')
let brandsContainer = document.querySelector('.brands-container')
let getSummary = brandsContainer.querySelector('.summary')

let brandButtons = document.querySelectorAll('.brand-button')
let clonedBrandButtons = []
//console.log(brandButtons);

let slider = document.createElement('section')
slider.classList.add('slider', 'brands-container-element')
let brandsList = document.createElement('ul')
brandsList.classList.add('brands-list')

for (let i = 0; i < brandButtons.length; i++) {
  let elementsList = document.createElement('li')
  elementsList.classList.add('brands-list-element')
  let newButton = brandButtons[i].cloneNode(true)
  elementsList.appendChild(newButton)
  brandsList.appendChild(elementsList)
}

let brandsListElements = brandsList.querySelectorAll('.brands-list-element')
for (let i = 6; i < brandsListElements.length; i++) {
  brandsListElements[i].classList.add('tablet-hidden')
}

for (let i = 8; i < brandsListElements.length; i++) {
  brandsListElements[i].classList.add('desktop-hidden')
}

slider.appendChild(brandsList)

brandsContainer.insertBefore(slider, getSummary)

if (window.innerWidth >= 768) {
  slider.setAttribute('style', 'display: flex')
}

/*window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    slider.setAttribute("style", "display: flex");
  } else {
    slider.setAttribute("style", "display: none");
  }
});*/

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 190
    },
    532: {
      slidesPerView: 2,
      spaceBetween: 60
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

let deviceType = document.querySelector('.device-type')
let getDeviceTypeSummary = deviceType.querySelector('.device-type-summary')

let deviceTypeButtons = document.querySelectorAll('.device-type-button')
let clonedDeviceTypeButtons = []
//console.log(brandButtons);

let slider2 = document.createElement('section')
slider2.classList.add('slider2')
let deviceList = document.createElement('ul')
deviceList.classList.add('device-list')

for (let i = 0; i < deviceTypeButtons.length; i++) {
  let deviceElementsList = document.createElement('li')
  deviceElementsList.classList.add('device-list-element')
  let newDeviceButton = deviceTypeButtons[i].cloneNode(true)
  deviceElementsList.appendChild(newDeviceButton)
  deviceList.appendChild(deviceElementsList)
}

let deviceListElements = deviceList.querySelectorAll('.device-list-element')
for (let i = 3; i < deviceListElements.length; i++) {
  deviceListElements[i].classList.add('tablet-hidden')
}
for (let i = 4; i < deviceListElements.length; i++) {
  deviceListElements[i].classList.add('desktop-hidden')
}

slider2.appendChild(deviceList)

deviceType.insertBefore(slider2, getDeviceTypeSummary)

if (window.innerWidth >= 768) {
  slider2.setAttribute('style', 'display: flex')
}

/*window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    slider2.setAttribute("style", "display: flex");
  } else {
    slider2.setAttribute("style", "display: none");
  }
});*/

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 230
    },
    532: {
      slidesPerView: 2,
      spaceBetween: 100
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

//Полный текст по клику
let aboutSummary = document.querySelector('.about-summary')
let tabletText = document.querySelector('.tablet-text')
let desktopText = document.querySelector('.desktop-text')
let desktopHideText = document.querySelector('.desktop-hide-text')
aboutSummary.addEventListener('click', function () {
  let summaryClass = aboutSummary.classList
  let expandText = aboutSummary.querySelector('.summary-text__expand-text')
  let hideText = aboutSummary.querySelector('.summary-text__hide-text')
  let expandArrow = aboutSummary.querySelectorAll('.expand-icon__expand-arrow')
  if (summaryClass.contains('hidden')) {
    expandText.setAttribute('style', 'display: none;')
    hideText.setAttribute('style', 'display: inline;')
    for (let i = 0; i < expandArrow.length; i++) {
      expandArrow[i].classList.remove('expand-icon__expand-arrow--to-bottom')
      expandArrow[i].classList.add('expand-icon__expand-arrow--to-top')
    }
    aboutSummary.classList.remove('hidden')
    aboutSummary.classList.add('expanded')
    tabletText.setAttribute('style', 'display: block;')
    desktopText.setAttribute('style', 'display: inline;')
    desktopHideText.setAttribute('style', 'display: block;')
  } else {
    expandText.setAttribute('style', 'display: inline')
    hideText.setAttribute('style', 'display: none')
    for (let i = 0; i < expandArrow.length; i++) {
      expandArrow[i].classList.remove('expand-icon__expand-arrow--to-top')
      expandArrow[i].classList.add('expand-icon__expand-arrow--to-bottom')
    }
    desktopHideText.setAttribute('style', 'display: none;')
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      desktopText.setAttribute('style', 'display: none;')
    } else if (window.innerWidth < 768) {
      tabletText.setAttribute('style', 'display: none;')
    }
    aboutSummary.classList.remove('expanded')
    aboutSummary.classList.add('hidden')
  }
})

//Полный список брендов по клику
let summary = brandsContainer.querySelector('.summary')
let hideBrands = function (element) {
  for (let i = 0; i < element.length; i++) {
    element[i].setAttribute('style', 'display: none')
  }
}
summary.addEventListener('click', function () {
  let summaryClass = summary.classList
  let expandText = summary.querySelector('.summary-text__expand-text')
  let hideText = summary.querySelector('.summary-text__hide-text')
  let expandArrow = summary.querySelectorAll('.expand-icon__expand-arrow')
  let tabletHidden = brandsContainer.querySelectorAll('.tablet-hidden')
  let desktopHidden = brandsContainer.querySelectorAll('.desktop-hidden')
  if (summaryClass.contains('hidden')) {
    expandText.setAttribute('style', 'display: none')
    hideText.setAttribute('style', 'display: inline')
    for (let i = 0; i < expandArrow.length; i++) {
      expandArrow[i].classList.remove('expand-icon__expand-arrow--to-bottom')
      expandArrow[i].classList.add('expand-icon__expand-arrow--to-top')
    }
    for (let i = 0; i < tabletHidden.length; i++) {
      tabletHidden[i].setAttribute('style', 'display: flex')
    }
    for (let i = 0; i < desktopHidden.length; i++) {
      desktopHidden[i].setAttribute('style', 'display: flex')
    }
    summary.classList.remove('hidden')
    summary.classList.add('expanded')
  } else {
    expandText.setAttribute('style', 'display: inline')
    hideText.setAttribute('style', 'display: none')
    for (let i = 0; i < expandArrow.length; i++) {
      expandArrow[i].classList.remove('expand-icon__expand-arrow--to-top')
      expandArrow[i].classList.add('expand-icon__expand-arrow--to-bottom')
    }
    if (window.innerWidth < 1440) {
      hideBrands(tabletHidden)
    } else {
      hideBrands(desktopHidden)
    }
    summary.classList.remove('expanded')
    summary.classList.add('hidden')
  }
})

//Полный список услуг по клику
let deviceTypeSummary = deviceType.querySelector('.summary')
let hideDevices = function (element) {
  for (let i = 0; i < element.length; i++) {
    element[i].setAttribute('style', 'display: none')
  }
}
deviceTypeSummary.addEventListener('click', function () {
  let deviceTypeSummaryClass = deviceTypeSummary.classList
  let expandText = deviceTypeSummary.querySelector('.summary-text__expand-text')
  let hideText = deviceTypeSummary.querySelector('.summary-text__hide-text')
  let expandArrow = deviceTypeSummary.querySelectorAll(
    '.expand-icon__expand-arrow'
  )
  let tabletHidden = deviceType.querySelectorAll('.tablet-hidden')
  let desktopHidden = deviceType.querySelectorAll('.desktop-hidden')
  if (deviceTypeSummaryClass.contains('hidden')) {
    expandText.setAttribute('style', 'display: none')
    hideText.setAttribute('style', 'display: inline')
    for (let i = 0; i < expandArrow.length; i++) {
      expandArrow[i].classList.remove('expand-icon__expand-arrow--to-bottom')
      expandArrow[i].classList.add('expand-icon__expand-arrow--to-top')
    }
    for (let i = 0; i < tabletHidden.length; i++) {
      tabletHidden[i].setAttribute('style', 'display: flex')
    }
    for (let i = 0; i < desktopHidden.length; i++) {
      desktopHidden[i].setAttribute('style', 'display: flex')
    }
    deviceTypeSummary.classList.remove('hidden')
    deviceTypeSummary.classList.add('expanded')
  } else {
    expandText.setAttribute('style', 'display: inline')
    hideText.setAttribute('style', 'display: none')
    for (let i = 0; i < expandArrow.length; i++) {
      expandArrow[i].classList.remove('expand-icon__expand-arrow--to-top')
      expandArrow[i].classList.add('expand-icon__expand-arrow--to-bottom')
    }
    if (window.innerWidth < 1440) {
      hideDevices(tabletHidden)
    } else {
      hideDevices(desktopHidden)
    }
    deviceTypeSummary.classList.remove('expanded')
    deviceTypeSummary.classList.add('hidden')
  }
})

//Модалки
let mobileMenuContainer = document.querySelector('.mobile-menu-container')
let content = document.querySelector('.content')

let openModal = function (modalWindow, button, form, overlay) {
  overlay.setAttribute('style', 'opacity: 0.9;')
  let overlaySize = window.innerWidth - 440
  let autofocus = form.querySelectorAll('input')
  if (window.innerWidth < 768) {
    form.setAttribute(
      'style',
      'width: ' + window.innerWidth + 'px; opacity: 1;'
    )
    modalWindow.setAttribute('style', 'position: fixed; right: 0; z-index: 50;')
    autofocus[0].focus()
  } else {
    form.setAttribute('style', 'opacity: 1;')
    modalWindow.setAttribute('style', 'position: fixed; right: 0; z-index: 50;')
    button.setAttribute('style', 'transform: translate(-95px, 30px)')
    overlay.setAttribute('style', 'opacity: 0.9; width: ' + overlaySize + 'px;')
    autofocus[0].focus()
  }
}

let hideModal = function (modalWindow, button, form, overlay) {
  content.removeAttribute('style', 'position: fixed')
  form.removeAttribute('style')
  overlay.removeAttribute('style')
  if (window.innerWidth < 768) {
    modalWindow.setAttribute(
      'style',
      'position: fixed; right: -' + window.innerWidth + 'px; z-index: 0;'
    )
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    modalWindow.setAttribute(
      'style',
      'position: fixed; right: -768px; z-index: 0;'
    )
    button.setAttribute('style', 'transform: translate(0, 30px)')
  } else {
    modalWindow.setAttribute(
      'style',
      'position: fixed; right: -1440px; z-index: 0;'
    )
    button.setAttribute('style', 'transform: translate(0, 30px)')
  }
}

let leaveRequest = document.querySelectorAll('.leave-request')
let callRequest = document.querySelectorAll('.call-request')

let modalFeedback = document.querySelector('.modal-feedback')
let closeButton = modalFeedback.querySelector('.button-menu-element')
let feedbackFormBlock = modalFeedback.querySelector('.form-block')
let modalOverlay = modalFeedback.querySelector('.modal-overlay')

let modalCall = document.querySelector('.modal-call')
let callCloseButton = modalCall.querySelector('.button-menu-element')
let callFormBlock = modalCall.querySelector('.form-block')
let callModalOverlay = modalCall.querySelector('.modal-overlay')

//Burger-menu
let burgerMenu = document.querySelector('.burger-menu')
let closeBurgerMenu = document.querySelector('.close-burger-menu')
let mobileMenuOverlay = document.querySelector('.mobile-menu-overlay')

burgerMenu.addEventListener('click', function () {
  mobileMenuContainer.setAttribute(
    'style',
    'margin-left: 0; box-shadow: 16px 0px 52px rgba(14, 24, 80, 0.2);'
  )
  content.setAttribute('style', 'position: fixed;')
  mobileMenuOverlay.setAttribute('style', '')
  if (window.innerWidth >= 768) {
    mobileMenuOverlay.setAttribute(
      'style',
      'width: ' + (window.innerWidth - 320) + 'px; opacity: 0.9; left: 320px;'
    )
  }
})

let hideMobileMenu = function () {
  mobileMenuContainer.removeAttribute('style', 'margin-left: 0;')
  //pageContainer.removeAttribute("style", "position: fixed;");
  content.removeAttribute('style', 'position: fixed;')
  mobileMenuOverlay.removeAttribute('style')
}

//События по кликам
leaveRequest.forEach((element) => {
  element.addEventListener('click', function () {
    openModal(modalFeedback, closeButton, feedbackFormBlock, modalOverlay)
    hideMobileMenu()
    content.setAttribute('style', 'position: fixed;')
  })
})

callRequest.forEach((element) => {
  element.addEventListener('click', function () {
    openModal(modalCall, callCloseButton, callFormBlock, callModalOverlay)
    hideMobileMenu()
    content.setAttribute('style', 'position: fixed;')
  })
})

closeButton.addEventListener('click', function () {
  hideModal(modalFeedback, closeButton, feedbackFormBlock, modalOverlay)
})

callCloseButton.addEventListener('click', function () {
  hideModal(modalCall, callCloseButton, callFormBlock, callModalOverlay)
})

modalOverlay.addEventListener('click', function () {
  hideModal(modalFeedback, closeButton, feedbackFormBlock, modalOverlay)
})

callModalOverlay.addEventListener('click', function () {
  hideModal(modalCall, callCloseButton, callFormBlock, callModalOverlay)
})

closeBurgerMenu.addEventListener('click', function () {
  hideMobileMenu()
})

mobileMenuOverlay.addEventListener('click', function () {
  hideMobileMenu()
})

window.addEventListener('resize', function () {
  if (window.innerWidth >= 768) {
    slider.setAttribute('style', 'display: flex')
    slider2.setAttribute('style', 'display: flex')
  } else {
    slider.setAttribute('style', 'display: none')
    slider2.setAttribute('style', 'display: none')
  }

  let overlaysArr = document.querySelectorAll('.overlay')
  for (let i = 0; i < overlaysArr.length; i++) {
    if (overlaysArr[i].hasAttribute('style')) {
      overlaysArr[i].setAttribute('style', 'opacity: 0.9; width: 1920px;')
    }
  }
})

/*window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
    slider2.setAttribute("style", "display: flex");
  } else {
    slider2.setAttribute("style", "display: none");
  }
});*/
