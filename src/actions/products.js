import { FETCH_IND_PRODUCT, FETCH_ALL_PRODUCTS, FETCH_RECENT_PRODUCTS } from './types';
import axios from 'axios';
import * as appConstants from '../config/constants';

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
        let url = appConstants.GET_ALL_ITEMS_URL + '?type=products';
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
        const url = appConstants.GET_AN_ITEM_URL + '?type=products&id=' + prodId;
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
        let url = appConstants.GET_RECENT_ITEMS_URL + '?type=products&size=5';
        return axios.get(url)
            .then(response => {
                dispatch(fetchRecentProducts(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};