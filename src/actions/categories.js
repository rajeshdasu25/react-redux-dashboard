import { FETCH_IND_CATEGORY, FETCH_ALL_CATEGORIES, FETCH_RECENT_CATEGORIES, ADD_NEW_CATEGORY } from './types';
import { setStatus } from './modal';
import axios from 'axios';
import * as appConstants from '../config/constants';

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
        let url = appConstants.GET_ALL_ITEMS_URL + '?type=categories';
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
        const url = appConstants.GET_AN_ITEM_URL + '?type=categories&id=' + catId;
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
        let url = appConstants.GET_RECENT_ITEMS_URL + '?type=categories&size=5';
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
        let url = appConstants.ADD_NEW_ITEM_URL + '?type=categories';
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