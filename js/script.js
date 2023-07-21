//Slider de projetos
const slider = document.querySelector('.elenco');
const slides = document.querySelectorAll('.ator-img');
const prevBtn = document.querySelector('#btn-back');
const nextBtn = document.querySelector('#btn-next');
let slideIndex = 0;

function showSlide(n) {
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${n * 100}%)`;
    slide.style.transition = 'transform 1s ease-in-out';
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
//FIM slider projetos