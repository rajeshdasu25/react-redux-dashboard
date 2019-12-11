import { FETCH_IND_QUERY, FETCH_ALL_QUERIES, FETCH_RECENT_QUERIES, ADD_NEW_QUERY } from './types';
import { setStatus } from './modal';
import axios from 'axios';
import * as appConstants from '../config/constants';

export const fetchQueries = (queries) => { 
    return {
        type: FETCH_ALL_QUERIES,
        queries
    }
};

export const fetchQuery = (category) => {
    return {
        type: FETCH_IND_QUERY,
        category
    }
};

export const fetchRecentQueries = (recentQueries) => {
    return {
        type: FETCH_RECENT_QUERIES,
        recentQueries
    }
};

export const addQuery = (category) => {
    return {
        type: ADD_NEW_QUERY,
        category
    }
};

export const fetchAllQueries = () => { 
    return (dispatch) => {
        let url = appConstants.GET_ALL_ITEMS_URL + '?type=queries';
        return axios.get(url)
            .then(response => {
                dispatch(fetchQueries(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchAQuery = (catId) => {
    return (dispatch) => {
        const url = appConstants.GET_AN_ITEM_URL + '?type=queries&id=' + catId;
        return axios.get(url)
            .then(response => {
                dispatch(fetchQuery(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchTop5Queries = () => {
    return (dispatch) => {
        let url = appConstants.GET_RECENT_ITEMS_URL + '?type=queries&size=5';
        return axios.get(url)
            .then(response => {
                dispatch(fetchRecentQueries(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addNewQuery = (formData, message) => { 
    return (dispatch) => {
        let url = appConstants.ADD_NEW_ITEM_URL + '?type=queries';
        return axios.post(url, formData)
            .then(response => { console.log('response: ', response);
                if (response.status === 200) {
                    dispatch(setStatus(false));
                }
            })
            .catch(error => {
                throw (error);
            });
    };
};