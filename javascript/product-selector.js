const items = document.querySelectorAll('.grid-item, .item-container02, .item-container03');
items.forEach(item => {
  const id = item.getAttribute('data-id');
  const image = item.querySelector('img').getAttribute('src');
  const title = item.querySelector('h2').innerHTML;
  const price = item.querySelector('.price').innerHTML;
  const description = item.querySelector('.description').innerHTML;
  const category = item.querySelector('.category').innerHTML;
  const tags = item.querySelector('.tags').innerHTML;

  if (location.href.includes('shop.html')) {
    // Add event listener to h2 element on shop page
    item.querySelector('h2').addEventListener('click', () => viewItem(id, encodeURIComponent(image), encodeURIComponent(title), encodeURIComponent(price), encodeURIComponent(description), encodeURIComponent(category), encodeURIComponent(tags)));
    item.querySelector('img').addEventListener('click', () => viewItem(id, encodeURIComponent(image), encodeURIComponent(title), encodeURIComponent(price), encodeURIComponent(description), encodeURIComponent(category), encodeURIComponent(tags)));
  } else if (location.href.includes('home.html')) {
    // Add event listener to .shop-now button on home page
    item.querySelector('.shop-now').addEventListener('click', () => viewItem(id, encodeURIComponent(image), encodeURIComponent(title), encodeURIComponent(price), encodeURIComponent(description), encodeURIComponent(category), encodeURIComponent(tags)));
  }

});

function viewItem(id, image, title, price, description, category, tags) {
  window.location.href = `product.html?id=${id}&image=${image}&title=${title}&price=${price}&description=${description}&category=${category}&tags=${tags}`;
}