import { FETCH_ALL_CATEGORIES } from './types';
import axios from 'axios';

const categoriesApiUrl = 'http://localhost:5000/getCategories';//'https://private-205f4-rajeshdasu.apiary-mock.com/categories';

export const fetchCategories = (categories) => {
    return {
        type: FETCH_ALL_CATEGORIES,
        categories
    }
};

export const fetchAllCategories = () => {
    return (dispatch) => {
        return axios.get(categoriesApiUrl)
            .then(response => {
                dispatch(fetchCategories(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};