//Get elements required for the header carousel
const headerImages = document.querySelectorAll('.header-image img');
let headerCurrentImageIndex = 0;
let headerTimerId;

//Automatic imaging switching functionality
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

//Interval between image switching
function headerStartTimer() {
  headerTimerId = setInterval(headerShowNextImage, 7000); 
}

function headerStopTimer() {
  clearInterval(headerTimerId);
}

//Get elements required for the previous and next button function in the carousel
const headerPrevButton = document.querySelector('.prev');
const headerNextButton = document.querySelector('.next');

//Functionality for when a user clicks the back button
headerPrevButton.addEventListener('click', () => {
  headerStopTimer();
  headerShowPrevImage();
  headerStartTimer();
});

//Functionality for when a user clicks the next button
headerNextButton.addEventListener('click', () => {
  headerStopTimer();
  headerShowNextImage();
  headerStartTimer();
});

//Always start the timer
headerStartTimer();