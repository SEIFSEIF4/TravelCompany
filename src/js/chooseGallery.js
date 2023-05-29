const istanbulGallery = document.getElementById("istanbulGallery");
const cairoGallery = document.getElementById("cairoGallery");
const allGallery = document.getElementById("allGallery");
const galleryCairo = document.querySelector(".gallery-cairo");
const galleryIstanbul = document.querySelector(".gallery-istanbul");
const galleryContainer = document.querySelector(".gallery-container");

istanbulGallery.addEventListener("click", () => {
  galleryCairo.classList.add("hidden");
  galleryIstanbul.classList.remove("hidden");  
  istanbulGallery.classList.add("active");
  cairoGallery.classList.remove("active");
  allGallery.classList.remove("active");
});

cairoGallery.addEventListener("click", () => {
  galleryCairo.classList.remove("hidden");
  galleryIstanbul.classList.add("hidden");

  cairoGallery.classList.add("active");
  istanbulGallery.classList.remove("active");
  allGallery.classList.remove("active");
});

allGallery.addEventListener("click", () => {
  galleryCairo.classList.remove("hidden");
  galleryIstanbul.classList.remove("hidden");

  allGallery.classList.add("active");
  istanbulGallery.classList.remove("active");
  cairoGallery.classList.remove("active");
});
