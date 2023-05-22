/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/api.js":
/*!******************************!*\
  !*** ./src/assets/js/api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getItemById: () => (/* binding */ getItemById),
/* harmony export */   getItems: () => (/* binding */ getItems)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./src/assets/js/constant.js");

async function getItemById(id) {
  try {
    const response = await fetch(`${_constant_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/item/${id}`);
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.log(error.message);
  }
}
async function getItems() {
  try {
    const response = await fetch(`${_constant_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/item`);
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.log(error.message);
  }
}


/***/ }),

/***/ "./src/assets/js/constant.js":
/*!***********************************!*\
  !*** ./src/assets/js/constant.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = 'http://localhost:3006';

/***/ }),

/***/ "./src/assets/js/detail.js":
/*!*********************************!*\
  !*** ./src/assets/js/detail.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProductDetail: () => (/* binding */ createProductDetail)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/assets/js/api.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./src/assets/js/constant.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./src/assets/js/main.js");



const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const product = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getItemById)(id);
function createProductDetail() {
  const productDetailsImage = document.createElement('div');
  productDetailsImage.classList.add('product-details__image');
  const productImage = document.createElement('img');
  productImage.src = _constant_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL + product.picture.path;
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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decrement: () => (/* binding */ decrement),
/* harmony export */   increment: () => (/* binding */ increment)
/* harmony export */ });
let count = 1;
const counterEl = document.getElementById("counter");
const resultEl = document.getElementById("result");
function multiply(num) {
  return num * 129;
}
function increment() {
  count++;
  counterEl.textContent = count;
  resultEl.textContent = multiply(count);
}
function decrement() {
  if (count > 0) {
    count--;
    counterEl.textContent = count;
    resultEl.textContent = multiply(count);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/detail.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=detail.53c8cd05e683a4af9784.js.map