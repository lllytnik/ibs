import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from '../types';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
