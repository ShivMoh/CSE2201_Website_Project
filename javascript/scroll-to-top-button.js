//Get the scroll to top element
const scrollBtn = document.querySelector('#scroll-to-top');

//Add an event listener that aacepts user input
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 750) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

//Ensures the animation is smooth when clicked
scrollBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
