import { getItemById } from './api.js';
import { BASE_URL } from './constant.js';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const product = await getItemById(id);


export function createProductDetail() {
    const productDetailsImage = document.createElement('div');
    productDetailsImage.classList.add('product-details__image');

    const productImage = document.createElement('img');
    productImage.src = BASE_URL + product.picture.path;
    productImage.alt = product.picture.alt;
    productDetailsImage.appendChild(productImage);

    const productDetailsInfo = document.createElement('div');
    productDetailsInfo.classList.add('product-details__info');

    const productTitle = document.createElement('h1');
    productTitle.classList.add('product-details__title');
    productTitle.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.classList.add('product-details__description');
    productDescription.textContent = product.info;

    const productSubTitle = document.createElement('h2');
    productSubTitle.classList.add('product-details__sub-title');
    productSubTitle.textContent = 'Details';

    const productDetails = document.createElement('p');
    productDetails.classList.add('product-details__detal');
    productDetails.textContent = product.details;

    const productDetailsInner = document.createElement('div');
    productDetailsInner.classList.add('product-details__inner');

    const productDetailsWrapperPrice = document.createElement('div');
    productDetailsWrapperPrice.classList.add('product-details__wrapper-price');

    const productDetailsPrice = document.createElement('div');
    productDetailsPrice.classList.add('product-details__price');
    productDetailsPrice.innerHTML = '$<span id="result">129</span>';

    const cartCounter = document.createElement('div');
    cartCounter.classList.add('cart-counter');

    const cartDecrementButton = document.createElement('button');
    cartDecrementButton.classList.add('cart-counter__btn', 'minus');
    cartDecrementButton.setAttribute('onclick', 'decrement()');

    const decrementImage = document.createElement('img');
    decrementImage.src = './assets/images/minus.svg';
    decrementImage.alt = 'minus';
    cartDecrementButton.appendChild(decrementImage);

    const cartCounterValue = document.createElement('span');
    cartCounterValue.classList.add('cart-counter__value');
    cartCounterValue.id = 'counter';
    cartCounterValue.textContent = '1';

    const cartIncrementButton = document.createElement('button');
    cartIncrementButton.classList.add('cart-counter__btn', 'plus');
    cartIncrementButton.setAttribute('onclick', 'increment()');


    const incrementImage = document.createElement('img');
    incrementImage.src = './assets/images/plus.svg';
    incrementImage.alt = 'plus';
    cartIncrementButton.appendChild(incrementImage);

    cartCounter.appendChild(cartDecrementButton);
    cartCounter.appendChild(cartCounterValue);
    cartCounter.appendChild(cartIncrementButton);

    productDetailsWrapperPrice.appendChild(productDetailsPrice);
    productDetailsWrapperPrice.appendChild(cartCounter);

    const productDetailsWrapperButton = document.createElement('div');
    productDetailsWrapperButton.classList.add('product-details__wrapper-button');

    const addCartButton = document.createElement('button');
    addCartButton.classList.add('product-details__button');
    addCartButton.textContent = 'Add to cart';

    const likeButton = document.createElement('button');
    likeButton.classList.add('product-card__like');

    const likeImage = document.createElement('img');
    likeImage.src = './assets/images/like.svg';
    likeImage.alt = 'like';
    likeButton.appendChild(likeImage);

    productDetailsWrapperButton.appendChild(addCartButton);
    productDetailsWrapperButton.appendChild(likeButton);

    productDetailsInner.appendChild(productDetailsWrapperPrice);
    productDetailsInner.appendChild(productDetailsWrapperButton);

    productDetailsInfo.appendChild(productTitle);
    productDetailsInfo.appendChild(productDescription);
    productDetailsInfo.appendChild(productSubTitle);
    productDetailsInfo.appendChild(productDetails);
    productDetailsInfo.appendChild(productDetailsInner);

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.classList.add('product-details');

    productDetailsContainer.appendChild(productDetailsImage);
    productDetailsContainer.appendChild(productDetailsInfo);
    const productDetailsElement = document.getElementById('product-render');
    productDetailsElement.appendChild(productDetailsContainer);
}

createProductDetail(product);
