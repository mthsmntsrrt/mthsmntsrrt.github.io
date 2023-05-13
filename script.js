const galleries = document.querySelectorAll('.gallery');
const sliders = document.querySelectorAll('.slider');
const sliderImages = document.querySelectorAll('.slider img');
const closeButtons = document.querySelectorAll('.close');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');

let images = [];
let currentImageIndex;

// Collect all gallery images
galleries.forEach(gallery => {
  const galleryImages = gallery.querySelectorAll('img');
  galleryImages.forEach(img => {
    images.push(img.src);
  });

  // When an image is clicked, show the slider with the image
  gallery.addEventListener('click', e => {
    // Only handle clicks on images
    if (e.target.tagName === 'IMG') {
      const imageUrl = e.target.src;
      currentImageIndex = images.indexOf(imageUrl);
      sliderImages.forEach(sliderImage => {
        sliderImage.src = imageUrl;
      });
      sliders.forEach(slider => {
        slider.classList.add('show');
      });
    }
  });
});

// When the close button is clicked, hide the slider
closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    sliders.forEach(slider => {
      slider.classList.remove('show');
    });
  });
});

// When the previous button is clicked, show the previous image
prevButtons.forEach(prevButton => {
  prevButton.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    sliderImages.forEach(sliderImage => {
      sliderImage.src = images[currentImageIndex];
    });
  });
});

// When the next button is clicked, show the next image
nextButtons.forEach(nextButton => {
  nextButton.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    sliderImages.forEach(sliderImage => {
      sliderImage.src = images[currentImageIndex];
    });
  });
});

let counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2500);
