import { FETCH_AN_ITEM, FETCH_ALL_ITEMS, FETCH_RECENT_ITEMS, ADD_NEW_ITEM } from './types';
import { setStatus } from './modal';
import axios from 'axios';
import * as appConstants from '../config/constants';

export const fetchItems = (allItems) => {  console.log('allItems: ', allItems);
    return {
        type: FETCH_ALL_ITEMS,
        allItems
    }
};

export const fetchItem = (anItem) => {
    return {
        type: FETCH_AN_ITEM,
        payload: anItem.category
    }
};

export const fetchRecentItems = (recentItems) => {
    return {
        type: FETCH_RECENT_ITEMS,
        recentItems
    }
};

export const addItem = (item) => {
    return {
        type: ADD_NEW_ITEM,
        item
    }
};

export const fetchAllItems = () => {
    return (dispatch) => {
        let url = appConstants.GET_ALL_ITEMS_URL + '?type=categories';
        return axios.get(url)
            .then(response => {
                dispatch(fetchItems(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchAnItem = (catId) => {
    return (dispatch) => {
        const url = appConstants.GET_AN_ITEM_URL + '?type=categories&id=' + catId;
        return axios.get(url)
            .then(response => {
                dispatch(fetchItem(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchTop5Items = () => {
    return (dispatch) => {
        let url = appConstants.GET_RECENT_ITEMS_URL + '?type=categories&size=5';
        return axios.get(url)
            .then(response => {
                dispatch(fetchRecentItems(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addNewItem = (formData) => {
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