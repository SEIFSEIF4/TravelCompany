const choosedImg = document.querySelector(".gallery__item--lg");
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery__item");

  // Add click event listener to each gallery item
  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove "gallery__item--lg" class from all gallery items
      galleryItems.forEach(function (item) {
        item.classList.remove("gallery__item--lg");
        item.style.order = "";
      });

      // Toggle "gallery__item--lg" class on the clicked gallery item
      this.classList.toggle("gallery__item--lg");

      // Set negative order on the clicked gallery item
      if (this.classList.contains("gallery__item--lg")) {
        this.style.order = -1;
        
        // Scroll to the chosen image
        this.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
