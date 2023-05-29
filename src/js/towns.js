import gsap from "gsap";

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
