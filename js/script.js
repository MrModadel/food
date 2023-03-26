let btnsModal = document.querySelectorAll('[data-modal]');
let btnsClose = document.querySelectorAll('[data-close]');
let modal = document.querySelector('.modal');
btnsModal.forEach(item => {
   item.onclick = () => {
      modal.classList.add('show', 'fade')
   }
})
btnsClose.forEach(item => {
   item.onclick = () => {
      modal.classList.remove('show')
   }
})
let slides = document.querySelectorAll('.offer__slide');
let next = document.querySelector('.offer__slider-next');
let prev = document.querySelector('.offer__slider-prev');
let lifeNumber = document.querySelector('#current');
let totalNumber = document.querySelector('#total');

let slideIndex = 0;

function showSlides(n) {
   if (slideIndex > slides.length - 1) {
      slideIndex = 0
   }
   if (slideIndex < 0) {
      slideIndex = slides.length - 1
   }
   if (slideIndex + 1 > 9) {
      lifeNumber.innerHTML = `${slideIndex + 1}`;
   } else {
      lifeNumber.innerHTML = `0${slideIndex + 1}`;
   }
   if (slides.length > 9) {
      totalNumber.innerHTML = `${slides.length}`;
   } else {
      totalNumber.innerHTML = `0${slides.length}`;
   }
   slides.forEach(slide => slide.classList.add('hide'))
   slides[slideIndex].classList.remove('hide')
   slides[slideIndex].classList.add('fade')
}
next.onclick = () => {
   slideIndex++
   showSlides()
}
prev.onclick = () => {
   slideIndex--
   showSlides()
}
showSlides()
let bigSls = document.querySelectorAll('.tabcontent');
let btnSl = document.querySelectorAll('.tabheader__item');
let bntIndex = 0;
function bigSlsF(n) {
   bigSls.forEach(k => k.classList.add('hide'));
   bigSls[bntIndex].classList.remove('hide');
   bigSls[bntIndex].classList.add('fade');
   btnSl.forEach(l=>l.classList.remove('tabheader__item_active'))
   btnSl[bntIndex].classList.add('tabheader__item_active');
}
bigSlsF()
btnSl.forEach(item => {
   item.onclick = () => {
      bntIndex = item.getAttribute('data-index');
      bigSlsF()
   }
})
