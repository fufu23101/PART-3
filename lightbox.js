document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lightbox-img");
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-expanded-img");
  const captionText = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close");

  let currentIndex = 0;

  // Function to show the selected image in the modal
  function showImage(index) {
    if (images[index]) {
      modalImg.src = images[index].src;
      captionText.textContent = images[index].alt || "Sneaker Image";
      modalImg.classList.add("fade-in");

      // Remove the fade-in class after animation completes
      setTimeout(function () {
        modalImg.classList.remove("fade-in");
      }, 300);
    }
  }

  // Open lightbox on image click
  images.forEach(function (img, index) {
    img.addEventListener("click", function () {
      currentIndex = index;
      modal.style.display = "block";
      showImage(currentIndex);
    });
  });

  // Close lightbox on close button click
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close lightbox if background is clicked
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle keyboard controls
  document.addEventListener("keydown", function (event) {
    if (modal.style.display === "block") {
      if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      } else if (event.key === "Escape") {
        modal.style.display = "none";
      }
    }
  });
});


