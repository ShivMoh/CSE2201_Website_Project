const headerImages = document.querySelectorAll('.header-image img');
let headerCurrentImageIndex = 0;
let headerTimerId;

function headerShowNextImage() {
  const currentImage = headerImages[headerCurrentImageIndex];
  currentImage.classList.remove('active');
  headerCurrentImageIndex = (headerCurrentImageIndex + 1) % headerImages.length;
  const nextImage = headerImages[headerCurrentImageIndex];
  nextImage.classList.add('active');
}

function headerShowPrevImage() {
  const currentImage = headerImages[headerCurrentImageIndex];
  currentImage.classList.remove('active');
  headerCurrentImageIndex = (headerCurrentImageIndex - 1 + headerImages.length) % headerImages.length;
  const prevImage = headerImages[headerCurrentImageIndex];
  prevImage.classList.add('active');
}

function headerStartTimer() {
  headerTimerId = setInterval(headerShowNextImage, 7000); 
}

function headerStopTimer() {
  clearInterval(headerTimerId);
}

const headerPrevButton = document.querySelector('.prev');
const headerNextButton = document.querySelector('.next');

headerPrevButton.addEventListener('click', () => {
  headerStopTimer();
  headerShowPrevImage();
  headerStartTimer();
});

headerNextButton.addEventListener('click', () => {
  headerStopTimer();
  headerShowNextImage();
  headerStartTimer();
});

headerStartTimer();

