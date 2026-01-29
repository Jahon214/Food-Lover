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
// --------------------------/Tabs------------------------------


// --------------------------Modal------------------------------
// 1. Elementlarni tanlab olish
const modal = document.querySelector('#modal'); // querySelectorAll emas!
const modalOpenBtns = document.querySelectorAll('[data-modal]');
const modalCloseBtn = document.querySelector('#modalClose');

// 2. Modalni OCHISH funksiyasi
const openModal = () => {
  modal.classList.remove('invisible', 'opacity-0');
  modal.classList.add('opacity-100');
  document.body.classList.add('overflow-hidden'); // Orqa fonni qotirish
};

// 3. Modalni YOPISH funksiyasi
const closeModal = () => {
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0', 'invisible');
  document.body.classList.remove('overflow-hidden'); // Skrollni qaytarish
};

// 4. Barcha ochish tugmalariga event ulash
modalOpenBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// 5. Yopish tugmasiga event ulash
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

// 6. Modal tashqarisiga (qora fonga) bosilganda yopish
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// 7. Escape tugmasi bosilganda yopish
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// 8. 5 sekunddan keyin avtomatik ochish (ixtiyoriy)
setTimeout(openModal, 5000);
// --------------------------/Modal------------------------------


// ------------------------Slider-----------------------------
const slider = document.querySelector('#slider')
const rightBtn = document.querySelector('#right')
const leftBtn = document.querySelector('#left')
const current = document.querySelector('#current')

let index = 0
let totalSlides = 6

let updateSlides = () => {
  slider.style.transform = `translateX(-${index * 100}%)`
  current.textContent = String(index + 1).padStart(2, '0')
}

let rightSlides = () => {
  index = (index + 1) % totalSlides
  updateSlides()
}

let leftSlides = () => {
  index = (index - 1 + totalSlides) % totalSlides
  updateSlides()
}

rightBtn.addEventListener('click', rightSlides)
leftBtn.addEventListener('click', leftSlides)
// ------------------------/Slider-----------------------------