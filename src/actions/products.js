import { FETCH_ALL_PRODUCTS, FETCH_RECENT_PRODUCTS } from './types';
import axios from 'axios';

const allProductsApiUrl = 'http://localhost:5000/getAllProducts';//'https://private-205f4-rajeshdasu.apiary-mock.com/products';
const recentProductsApiUrl = 'http://localhost:5000/getRecentProducts?size=5';

export const fetchProducts = (products) => {
    return {
        type: FETCH_ALL_PRODUCTS,
        products
    }
};

export const fetchRecentProducts = (topProducts) => {
    return {
        type: FETCH_RECENT_PRODUCTS,
        topProducts
    }
};

export const fetchAllProducts = () => {
    return (dispatch) => {
        return axios.get(allProductsApiUrl)
            .then(response => {
                dispatch(fetchProducts(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchTop5Products = () => {
    return (dispatch) => {
        return axios.get(recentProductsApiUrl)
            .then(response => {
                dispatch(fetchRecentProducts(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};