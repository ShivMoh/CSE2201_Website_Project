//Get the relevant information required for the selector function
const items = document.querySelectorAll('.product, .item-container02, .item-container03');

//Select products based on certain criteria
items.forEach(item => {
  const id = item.getAttribute('data-id');
  const image = item.querySelector('img').getAttribute('src');
  const title = item.querySelector('h2').innerHTML;
  const price = item.querySelector('.price').innerHTML;
  const description = item.querySelector('.description').innerHTML;
  const category = item.querySelector('.category').innerHTML;
  const tags = item.querySelector('.tags').innerHTML;
  const rating = item.getAttribute('data-rating');

  if (location.href.includes('shop.html')) {
    // Add event listener to h2 element on shop page
    item.querySelector('h2').addEventListener('click', () => viewItem(id, encodeURIComponent(image), encodeURIComponent(title), encodeURIComponent(price), encodeURIComponent(description), encodeURIComponent(category), encodeURIComponent(tags), encodeURIComponent(rating)));
    item.querySelector('img').addEventListener('click', () => viewItem(id, encodeURIComponent(image), encodeURIComponent(title), encodeURIComponent(price), encodeURIComponent(description), encodeURIComponent(category), encodeURIComponent(tags), encodeURIComponent(rating)));
    item.querySelector('.price').addEventListener('click', () => viewItem(id, encodeURIComponent(image), encodeURIComponent(title), encodeURIComponent(price), encodeURIComponent(description), encodeURIComponent(category), encodeURIComponent(tags), encodeURIComponent(rating)));
  } else if (location.href.includes('home.html')) {
    // Add event listener to .shop-now button on home page
    item.querySelector('.shop-now').addEventListener('click', () => viewItem(id, encodeURIComponent(image), encodeURIComponent(title), encodeURIComponent(price), encodeURIComponent(description), encodeURIComponent(category), encodeURIComponent(tags), encodeURIComponent(rating)));
  }
});

//Display the queried product
function viewItem(id, image, title, price, description, category, tags, rating) {
  window.location.href = `product.html?id=${id}&image=${image}&title=${title}&price=${price}&description=${description}&category=${category}&tags=${tags}&rating=${rating}`;
}