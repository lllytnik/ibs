const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
    event.preventDefault();

    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const products = Array.from(document.querySelectorAll('.product-card'));

    for (const product of products) {
        const productTitle = product.querySelector('.product-card__title');
        const productName = productTitle.textContent.toLowerCase();

        if (productName.includes(searchTerm)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    }
}
