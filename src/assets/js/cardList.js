import { getItems } from './api.js';
import { BASE_URL } from './constant.js';

import ImageLike from '../images/like.png';

const products = await getItems();
const productsList = document.querySelector('.products-list');

export async function createProductCards() {

    for (const product of products) {

        const article = document.createElement('article');
        const likeButton = document.createElement('button');
        const likeImage = document.createElement('img');
        const productImage = document.createElement('img');
        const productLink = document.createElement('a');
        const productTitle = document.createElement('h3');
        const productPrice = document.createElement('span');

        article.className = 'product-card';
        likeButton.className = 'products-card__like';
        likeImage.src = ImageLike;
        likeImage.alt = 'like';
        productImage.className = 'product-card__image';
        productImage.src = BASE_URL + product.picture.path;
        productImage.alt = product.picture.alt;
        productLink.className = 'product-card__link';
        productLink.href = 'pages/details/product-details.html?id=' + product.id;
        productTitle.className = 'product-card__title';
        productTitle.textContent = product.name;
        productPrice.className = 'product-card__price';
        productPrice.textContent = `$${product.price.value}`;

        likeButton.appendChild(likeImage);
        productLink.appendChild(productTitle);
        productsList.appendChild(article);
        article.appendChild(likeButton);
        article.appendChild(productImage);
        article.appendChild(productLink);
        article.appendChild(productPrice);

    }
}

createProductCards(products, productsList);
