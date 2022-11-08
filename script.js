//cabecalho
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

allEventListners();

function allEventListners() {

  navToggler.addEventListener('click', togglerClick);

  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}


// menu
document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.menu').addEventListener("click", function() {
    this.classList.toggle("menu--ativo");
    document.querySelector(".nav-telacheia").classList.toggle("nav-telacheia--open");
  });
  
});


// slider
var AltaSlider = new Swiper('.alta-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// comentarios
var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable:true,
  },
  breakpoints: {
     0: {
     slidesPerView: 1,
     },
     700: {
     slidesPerView: 2,
     },
     1024: {
     slidesPerView: 3,
     },
  },
});
