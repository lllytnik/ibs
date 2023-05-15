const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id) {
    fetch(`http://localhost:3006/item/${id}`)
        .then(res => res.json())
        .then(data => {
            const product = data.content;
            productTitle.textContent = product.name;
            productImage.src = product.picture.path;
            productImage.alt = product.picture.alt;
            productDescription.textContent = product.info;
            productDetails.textContent = product.details;
        })
        .then(obj => console.log(obj))
        .catch(error => console.error(error));
} else {
    fetch('http://localhost:3006/item')
        .then(res => res.json())
        .then(data => {
            const products = data.content;
            const productsList = document.querySelector('.products-list');
            createProductCards(products, productsList);
        })
        .catch(error => console.error(error));
}
console.log(id)