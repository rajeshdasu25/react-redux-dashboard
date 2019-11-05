import { FETCH_ALL_CATEGORIES, FETCH_RECENT_CATEGORIES, ADD_NEW_CATEGORY } from './types';
import { setStatus } from './modal';
import axios from 'axios';

const allCategoriesApiUrl = 'http://localhost:5000/getAllCategories';//'https://private-205f4-rajeshdasu.apiary-mock.com/categories';
const recentCategoriesApiUrl = 'http://localhost:5000/getRecentCategories?size=5';
const addCategoryApiUrl = 'http://localhost:5000/addCategory';

export const fetchCategories = (categories) => {
    return {
        type: FETCH_ALL_CATEGORIES,
        categories
    }
};

export const fetchRecentCategories = (recentCategories) => {
    return {
        type: FETCH_RECENT_CATEGORIES,
        recentCategories
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
        return axios.get(allCategoriesApiUrl)
            .then(response => {
                dispatch(fetchCategories(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchTop5Categories = () => {
    return (dispatch) => {
        return axios.get(recentCategoriesApiUrl)
            .then(response => {
                var allItems = response.data;
                var reverseItems = allItems.reverse();
                var top5items = reverseItems.slice(0,5);
                dispatch(fetchRecentCategories(top5items));
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