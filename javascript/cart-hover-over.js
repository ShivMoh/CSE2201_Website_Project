//Cart hover over funtionality
const cartLink = document.querySelector('.cart-link');
const deliveryDropdown = document.querySelectorAll('.cart-delivery'); 

deliveryDropdown.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cartLink.dataset.hovering = 'true';
    });
});
deliveryDropdown.forEach(element => {
  element.addEventListener('mouseleave', () => {
    cartLink.dataset.hovering = 'true';
    });
});

// cartLink.mouseenter = () => {
//   console.log("Hello?")
// }
// deliveryDropdown.addEventListener('mouseenter', () => {
// cartLink.dataset.hovering = 'true';
// });

// deliveryDropdown.addEventListener('mouseleave', () => {
// cartLink.dataset.hovering = 'false';
// });



cartLink.addEventListener('click', (event) => {
if (cartLink.dataset.hovering === 'true') {
  event.preventDefault();
}
});