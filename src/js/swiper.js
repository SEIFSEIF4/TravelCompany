import Swiper, { Navigation, Pagination } from "swiper";

// Initialize the Swiper with necessary modules and configurations
var swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  rewind: true,
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

// Function to handle changes in orientation or screen width
const handleOrientationChange = () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // If screen width is less than or equal to 767px
    changeSlideView(1);
  } else if (window.matchMedia("(max-width: 992px)").matches) {
    // If screen width is between 768px and 992px
    changeSlideView(2);
  } else {
    // If screen width is greater than or equal to 993px
    changeSlideView(3);
  }
};

// Event listener for the resize event to handle orientation changes
window.addEventListener("resize", handleOrientationChange);

// Function to change the number of slides displayed in the Swiper
const changeSlideView = (slidesPerView) => {
  swiper.params.slidesPerView = slidesPerView;
  swiper.update();
};
