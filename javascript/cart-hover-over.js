//Cart hover over funtionality
const cartLink = document.querySelector('.cart-link');
const deliveryDropdown = document.querySelector('.cart-delivery');

deliveryDropdown.addEventListener('mouseenter', () => {
cartLink.dataset.hovering = 'true';
});

deliveryDropdown.addEventListener('mouseleave', () => {
cartLink.dataset.hovering = 'false';
});

cartLink.addEventListener('click', (event) => {
if (cartLink.dataset.hovering === 'true') {
  event.preventDefault();
}
});