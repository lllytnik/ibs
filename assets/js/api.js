import { BASE_URL } from './constant.js';


async function getItemById(id) {
    try {
        const response = await fetch(`${BASE_URL}/item/${id}`);
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.log(error.message);
    }
}

async function getItems() {
    try {
        const response = await fetch(`${BASE_URL}/item`);
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.log(error.message);
    }
}

export { getItems, getItemById };