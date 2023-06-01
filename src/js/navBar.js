import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  const brandText = document.getElementById("brandText");
  const windowHeight = window.innerHeight;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position has reached the header's height
    if (scrollPosition >= header.offsetHeight) {
      console.log(header.offsetHeight);
      navBar.classList.add("white");
      logo.src = "./assets/images/world-tour-icon.png";

      gsap.to(brandText, { opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      console.log(header.offsetHeight);
      navBar.classList.remove("white");
      logo.src = "./assets/images/Logo.png";

      // Fade out the brandText element using GSAP
      gsap.to(brandText, { opacity: 0, duration: 1, ease: "power2.out" });

      // Fade in from the right when below the header's height
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
