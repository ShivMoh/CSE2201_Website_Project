// Get the dropdown menu
const sortDropdown = document.getElementById('sort');

// Add an event listener to the dropdown menu
sortDropdown.addEventListener('change', () => {
  // Get the selected sort option
  const sortOption = sortDropdown.value;

  // Get the grid container and an array of the grid items
  const gridContainer = document.querySelector('.grid-container');
  const gridItems = Array.from(gridContainer.children);

  // Sort the grid items based on the selected sort option
  if (sortOption === 'name-asc') {
    // Sort by name (A-Z)
    gridItems.sort((a, b) => {
      const aName = a.querySelector('h2').textContent;
      const bName = b.querySelector('h2').textContent;
      return aName.localeCompare(bName);
    });
  } else if (sortOption === 'name-desc') {
    // Sort by name (Z-A)
    gridItems.sort((a, b) => {
      const aName = a.querySelector('h2').textContent;
      const bName = b.querySelector('h2').textContent;
      return bName.localeCompare(aName);
    });
  } else if (sortOption === 'price-asc') {
    // Sort by price (Low to High)
    gridItems.sort((a, b) => {
      const aPrice = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
      const bPrice = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
      return aPrice - bPrice;
    });
  } else if (sortOption === 'price-desc') {
    // Sort by price (High to Low)
    gridItems.sort((a, b) => {
      const aPrice = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
      const bPrice = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
      return bPrice - aPrice;
    });
  }

  // Append the sorted grid items back to the grid container
  gridItems.forEach((item) => {
    gridContainer.appendChild(item);
  });
});


// Get the grid container
const gridContainer = document.querySelector('.grid-container');

// Get an array of the grid items
const gridItems = Array.from(gridContainer.children);

// Sort the grid items by name (A-Z)
gridItems.sort((a, b) => {
  const aName = a.querySelector('h2').textContent;
  const bName = b.querySelector('h2').textContent;
  return aName.localeCompare(bName);
});

// Append the sorted grid items back to the grid container
gridItems.forEach((item) => {
  gridContainer.appendChild(item);
});
