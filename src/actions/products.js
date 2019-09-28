import { FETCH_ALL_PRODUCTS } from './types';
import axios from 'axios';

const productsApiUrl = 'https://private-205f4-rajeshdasu.apiary-mock.com/products';

export const fetchProducts = (products) => {
    return {
        type: FETCH_ALL_PRODUCTS,
        products
    }
};

export const fetchAllProducts = () => {
    return (dispatch) => {
        return axios.get(productsApiUrl)
            .then(response => {
                dispatch(fetchProducts(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};