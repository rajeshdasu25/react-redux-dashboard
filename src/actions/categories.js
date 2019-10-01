import { FETCH_ALL_CATEGORIES, ADD_NEW_CATEGORY } from './types';
import axios from 'axios';

const categoriesListApiUrl = 'http://localhost:5000/getCategories';//'https://private-205f4-rajeshdasu.apiary-mock.com/categories';
const addCategoryApiUrl = 'http://localhost:5000/addCategory';

export const fetchCategories = (categories) => {
    return {
        type: FETCH_ALL_CATEGORIES,
        categories
    }
};

export const addCategory = (category) => { debugger;
    return {
        type: ADD_NEW_CATEGORY,
        category
    }
};

export const fetchAllCategories = () => {
    return (dispatch) => {
        return axios.get(categoriesListApiUrl)
            .then(response => {
                dispatch(fetchCategories(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addNewCategory = (formData) => {debugger;
    return (dispatch) => {
        return axios.post(addCategoryApiUrl, formData)
            .then(response => {
                dispatch(addCategory(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};