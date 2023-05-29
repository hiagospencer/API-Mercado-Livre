import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.mercadolibre.com/sites/MLB",
    timeout: 10000
})

export const getProducts = async (product) => api.get(`/search?q=${product}`)

export default api;
