const scrollBtn = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 750) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});


scrollBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
