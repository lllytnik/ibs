import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from './constant.js';
import { displayErrorModal } from './modalErrorNetwork.js';

export interface Picture {
    path: string;
    alt: string;
}

export interface Price {
    value: number;
    currency: string;
}

export interface Item {
    id: string;
    name: string;
    info: string;
    details: string;
    description: string;
    like: boolean;
    picture: Picture;
    price: Price;
}

const api = axios.create({
    baseURL: BASE_URL
});

api.interceptors.response.use(
    response => response,
    error => {
        const errorMessage = error.message;
        displayErrorModal(errorMessage);
        return Promise.reject(error);
    }
);

export async function getItems(): Promise<AxiosResponse<{ content: Item[] }>> {
    try {
        const response = await api.get<{ content: Item[] }>('');
        return response;
    } catch (error: any) {
        console.error(error.message);
        throw error;
    }
}

export async function getItemById(id: string): Promise<AxiosResponse<{ content: Item }>> {
    try {
        const response = await api.get<{ content: Item }>(`/${id}`);
        return response;
    } catch (error: any) {
        console.error(error.message);
        throw error;
    }
}
