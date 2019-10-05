import { FETCH_ALL_CATEGORIES, ADD_NEW_CATEGORY } from './types';
import { setStatus } from './modal';
import axios from 'axios';

const categoriesListApiUrl = 'http://localhost:5000/getCategories';//'https://private-205f4-rajeshdasu.apiary-mock.com/categories';
const addCategoryApiUrl = 'http://localhost:5000/addCategory';

export const fetchCategories = (categories) => {
    return {
        type: FETCH_ALL_CATEGORIES,
        categories
    }
};

export const addCategory = (category) => { 
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

export const addNewCategory = (formData) => {
    return (dispatch) => {
        return axios.post(addCategoryApiUrl, formData)
            .then(response => { 
                if(response.status === 200) {
                    dispatch(setStatus(false));
                }
            })
            .catch(error => {
                throw (error);
            });
    };
};