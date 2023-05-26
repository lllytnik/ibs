import axios from 'axios';
import { BASE_URL } from './constant.js';
import { displayErrorModal } from './modal.js';

const api = axios.create({
    baseURL: BASE_URL
});

api.interceptors.response.use(
    response => response.data.content,
    error => {
        const errorMessage = error.message;
        displayErrorModal(errorMessage);
        return Promise.reject(error);
    }
);

async function getItemById(id) {
    try {
        const response = await api.get(`/item/${id}`);
        return response;
    } catch (error) {
        console.error(error.message);
    }
}

async function getItems() {
    try {
        const response = await api.get('/item');
        return response;
    } catch (error) {
        console.error(error.message);
    }
}
export { getItems, getItemById };
