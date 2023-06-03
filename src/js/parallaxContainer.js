const parallaxContainer = document.getElementById("parallaxContainer");

// Check if the window width is greater than or equal to 725 pixels
if (window.innerWidth >= 725) {
  let maxHeight;

  // Check if the window width is greater than 1440 pixels
  if (window.innerWidth > 1440) {
    // Calculate the maximum height as the minimum value between 60% of the window width and 1000 pixels
    maxHeight = Math.min(window.innerWidth * 0.6, 1000);
  } else {
    // Calculate the maximum height as the minimum value between 60% of the window width and 1080 pixels
    maxHeight = Math.min(window.innerWidth * 0.6, 1080);
  }

  // Set the maximum height of the parallax container using the calculated maxHeight
  parallaxContainer.style.maxHeight = `${maxHeight}px`;
} else {
  // Set the maximum height of the parallax container to 1.6 times the window width
  parallaxContainer.style.maxHeight = `${window.innerWidth * 1.6}px`;
}
