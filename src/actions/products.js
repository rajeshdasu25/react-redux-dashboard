import { FETCH_IND_PRODUCT, FETCH_ALL_PRODUCTS, FETCH_RECENT_PRODUCTS } from './types';
import axios from 'axios';

const getAllItemsApiUrl = 'http://localhost:5000/getAllItems';
const getAnItemApiUrl = 'http://localhost:5000/getAnItem';
const getRecentItemsApiUrl = 'http://localhost:5000/getRecentItems';
//const allProductsApiUrl = 'https://private-205f4-rajeshdasu.apiary-mock.com/products';

export const fetchProducts = (products) => {
    return {
        type: FETCH_ALL_PRODUCTS,
        products
    }
};

export const fetchProduct = (product) => {
    return {
        type: FETCH_IND_PRODUCT,
        product
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
        let url = getAllItemsApiUrl + '?type=products';
        return axios.get(url)
            .then(response => {
                dispatch(fetchProducts(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchAProduct = (prodId) => {
    return (dispatch) => {
        const url = getAnItemApiUrl + '?type=products&id=' + prodId;
        //const url = indProductApiUrl+'?id='+prodId;
        return axios.get(url)
            .then(response => {
                dispatch(fetchProduct(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchTop5Products = () => {
    return (dispatch) => {
        let url = getRecentItemsApiUrl + '?type=products&size=5';
        return axios.get(url)
            .then(response => {
                dispatch(fetchRecentProducts(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};