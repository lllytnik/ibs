const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
let timeoutId;

searchInput.addEventListener('input', debounce(handleSearch, 1000));

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
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

function debounce(func, delay) {
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

