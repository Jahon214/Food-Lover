// let loaderEl = document.querySelector('#loader')

// setTimeout(() => {
//   loaderEl.classList.add('hidden')
// }, 3000);


// --------------------------Tabs------------------------------


let tabButtons = document.querySelectorAll('#tabsLocation button')
let tabContents = document.querySelectorAll('#tabContainer > div')

let hideTabContent = () => {
  tabContents.forEach((qiymat) => {
    qiymat.classList.add('hidden')
    qiymat.classList.add('opacity-0')
    qiymat.classList.add('translate-y-4')
  })
  tabButtons.forEach((qiymat) => {
    qiymat.classList.remove('bg-yellow-500', 'text-white')
    qiymat.classList.add('text-yellow-500')
  })
}


let showTabContent = (index) => {
  hideTabContent()
  tabContents[index].classList.remove('hidden')
  setTimeout(() => {
    tabContents[index].classList.remove('opacity-0')
    tabContents[index].classList.remove('translate-y-4')
  }, 200);
  tabButtons[index].classList.add('bg-yellow-500', 'text-white')
  tabButtons[index].classList.remove('text-yellow-500')
}

hideTabContent()
showTabContent(0)

tabButtons.forEach((qiymat, index) => {
  qiymat.addEventListener('click', () => {
    hideTabContent()
    showTabContent(index)
  })
})
