import Swiper, { Navigation, Pagination } from 'swiper';
var swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  rewind: true,
  zoom: true,
  initialSlide: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
