// Get elements
const productsContainer = document.getElementById('products');
const sortSelect = document.getElementById('sort-by');
    const categorySelect = document.getElementById('category');
    const products = document.getElementsByClassName('product');



// Sort products based on the selected option
sortSelect.addEventListener('change', () => {
  const sortBy = sortSelect.value;

  const sortedProducts = Array.from(productsContainer.children)
    .sort((a, b) => {
      if (sortBy === 'price-low-to-high') {
        return a.dataset.price - b.dataset.price;
      } else if (sortBy === 'price-high-to-low') {
        return b.dataset.price - a.dataset.price;
      } else if (sortBy === 'rating-high-to-low') {
        return b.dataset.rating - a.dataset.rating;
      } else if (sortBy === 'rating-low-to-high') {
        return a.dataset.rating - b.dataset.rating;
      }
    });

  productsContainer.innerHTML = '';
  sortedProducts.forEach((product) => {
    productsContainer.appendChild(product);
  });
});

categorySelect.addEventListener('change', filterProducts);

function filterProducts() {
  const selectedCategory = categorySelect.value.toLowerCase();

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const categories = product.dataset.category.split(',');

    if (selectedCategory === 'all' || categories.includes(selectedCategory)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  }
}


    // Get the value of the category parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Set the value of the category select based on the category parameter value
if (category === 'men') {
categorySelect.value = 'men';
}

if (category === 'women') {
categorySelect.value = 'women';
}

if (category === 'clothing') {
categorySelect.value = 'clothing';
}

if (category === 'accessories') {
categorySelect.value = 'accessories';
}

filterProducts();





const productList = document.getElementById('products');
const searchInput = document.getElementById('search-input');

function searchProducts() {
  const searchValue = searchInput.value.toLowerCase();

  Array.from(productList.children).forEach(product => {
    const title = product.querySelector('.product-title').textContent.toLowerCase();
    if (title.includes(searchValue)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', searchProducts);




const prevArrow = document.querySelector('.prev-arrow');
const currentPage = 1;

if (currentPage === 1) {
prevArrow.classList.add('disabled');
}