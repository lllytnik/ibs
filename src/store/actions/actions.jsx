import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from '../types';
import { getProducts } from '../../assets/js/api';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    error: error,
});

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());

        try {
            const products = await getProducts();
            dispatch(fetchProductsSuccess(products));
        } catch (error) {
            dispatch(fetchProductsFailure(error.message));
        }
    };
};
