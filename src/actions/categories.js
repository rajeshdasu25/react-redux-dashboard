import { FETCH_IND_CATEGORY, FETCH_ALL_CATEGORIES, FETCH_RECENT_CATEGORIES, ADD_NEW_CATEGORY } from './types';
import { setStatus } from './modal';
import axios from 'axios';

const getAllItemsApiUrl = 'http://localhost:5000/getAllItems';
const getAnItemApiUrl = 'http://localhost:5000/getAnItem';
const getRecentItemsApiUrl = 'http://localhost:5000/getRecentItems';
const addNewItemApiUrl = 'http://localhost:5000/addNewItem';
//const allCategoriesApiUrl = 'https://private-205f4-rajeshdasu.apiary-mock.com/categories';
const addCategoryApiUrl = 'http://localhost:5000/addCategory';

export const fetchCategories = (categories) => {
    return {
        type: FETCH_ALL_CATEGORIES,
        categories
    }
};

export const fetchCategory = (category) => {
    return {
        type: FETCH_IND_CATEGORY,
        category
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
        let url = getAllItemsApiUrl + '?type=categories';
        return axios.get(url)
            .then(response => {
                dispatch(fetchCategories(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchACategory = (catId) => {
    return (dispatch) => {
        const url = getAnItemApiUrl + '?type=categories&id=' + catId;
        return axios.get(url)
            .then(response => {
                dispatch(fetchCategory(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchTop5Categories = () => {
    return (dispatch) => {
        let url = getRecentItemsApiUrl + '?type=categories&size=5';
        return axios.get(url)
            .then(response => {
                dispatch(fetchRecentCategories(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addNewCategory = (formData) => {
    return (dispatch) => {
        let url = addNewItemApiUrl + '?type=categories';
        return axios.post(url, formData)
            .then(response => {
                if (response.status === 200) {
                    dispatch(setStatus(false));
                }
            })
            .catch(error => {
                throw (error);
            });
    };
};