window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "./assets/css/style.css";
import "../node_modules/normalize.css/normalize.css";
import gsap from "gsap";

// Parllex Effect
const parallax_el = document.querySelectorAll(".parallax");
const parallaxContainer = document.getElementById("parallaxContainer");

let xValue = 0,
  yValue = 0;
let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

    let zValue =
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `perspective(2300px) translateZ(${
      zValue * speedz
    }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
}

update(0);

window.addEventListener("mousemove", (e) => {
  // if (timeline.isActive()) return;
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;
  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);
});

if (window.innerWidth >= 725) {
  parallaxContainer.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
  parallaxContainer.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

/********** gsap animation **************/
let timeline = gsap.timeline();

Array.from(parallax_el)
  .filter((el) => !el.classList.contains("text"))
  .forEach((el) => {
    timeline.from(
      el,
      {
        top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
        duration: 3.5,
        ease: "power3.out",
      },
      "1"
    );
  });

timeline
  .from(
    ".text h1",
    {
      y:
        window.innerHeight -
        document.querySelector(".text h1").getBoundingClientRect().top +
        200,
      duration: 2.5,
    },
    "2.5"
  )
  .from(
    ".text h2",
    {
      y: -150,
      opacity: 0,
      duration: 1.5,
    },
    "3"
  );

/******* body **********/
document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  const brandText = document.getElementById("brandText");
  const windowHeight = window.innerHeight;

  window.addEventListener("scroll", function () {
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position has reached 100vh
    if (scrollPosition >= windowHeight) {
      navBar.classList.add("white");
      logo.src = "./assets/images/world-tour-icon.png";
      // Fade in the brandText element using GSAP
      gsap.to(brandText, { opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      navBar.classList.remove("white");
      logo.src = "./assets/images/Logo.png";

      // Fade out the brandText element using GSAP
      gsap.to(brandText, { opacity: 0, duration: 1, ease: "power2.out" });

      // Fade in from the right when below 100vh
      gsap.from(brandText, { x: "50%", duration: 0.5, ease: "power2.out" });
      gsap.to(brandText, { x: "0%", duration: 0.5, ease: "power2.out" });
    }

    // Calculate the rotation angle based on the scroll position
    var rotation = (scrollPosition / windowHeight) * 135;

    // Limit the rotation angle to 135 degrees
    rotation = Math.min(rotation, 135);

    // Apply the rotation to the logo
    logo.style.transform = "rotate(" + rotation + "deg)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var expandBtn = document.getElementById("expandBtn");
  var hiddenOffers = document.querySelectorAll(".col-md-4.offers.hidden");
  var isExpanded = false;

  // Show only the first three offers
  var initialVisibleOffers = document.querySelectorAll(
    ".col-md-4.offers:nth-child(-n+3)"
  );
  initialVisibleOffers.forEach(function (offer) {
    offer.classList.remove("hidden");
    offer.classList.add("visible");
  });

  // Handle the expand button click event
  expandBtn.addEventListener("click", function () {
    // Toggle the visibility of the hidden offers using GSAP
    hiddenOffers.forEach(function (offer) {
      if (!isExpanded) {
        gsap.to(offer, { opacity: 1, duration: 0.5 });
      } else {
        gsap.to(offer, { opacity: 0, duration: 0.5 });
      }
      offer.classList.toggle("hidden");
    });

    // Toggle the button text and update the expanded state
    if (isExpanded) {
      expandBtn.textContent = "عرض المزيد";
    } else {
      expandBtn.textContent = "عرض أٌقل";
      // Scroll down by 50 pixels
      window.scrollBy(0, 880);
    }
    isExpanded = !isExpanded;
  });
});

document.getElementById("copyright").innerHTML =
  "جميع الحقوق محفوظة سنة " + new Date().getFullYear();
