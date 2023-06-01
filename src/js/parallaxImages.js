var parallaxImages = document.getElementsByClassName("parallax");

// Function to check if all images have loaded
function checkImagesLoaded() {
  for (var i = 0; i < parallaxImages.length; i++) {
    if (!parallaxImages[i].complete) {
      return false; // If any image is not loaded, return false
    }
  }
  return true; // All images are loaded
}

// Function to show the parallax container once all images are loaded
function showParallaxContainer() {
  var parallaxContainer = document.getElementById("parallaxContainer");
  parallaxContainer.style.visibility = "visible";
}

// Check if all images are loaded initially
if (checkImagesLoaded()) {
  showParallaxContainer();
} else {
  // Add "load" event listener to each image except for the ones you want to hide
  Array.from(parallaxImages).forEach(function (image) {
    if (
      !image.classList.contains("bg-img") &&
      !image.classList.contains("text")
    ) {
      image.addEventListener("load", function () {
        if (checkImagesLoaded()) {
          showParallaxContainer();
        }
      });
    }
  });
}
