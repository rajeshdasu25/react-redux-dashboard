import { ADD_NEW_USER, FETCH_ALL_USERS, FETCH_RECENT_USERS } from './types';
import { setStatus } from './modal';
import axios from 'axios';

const getAllItemsApiUrl = 'http://localhost:5000/getAllItems';
//const getAnItemApiUrl = 'http://localhost:5000/getAnItem';
const addNewItemApiUrl = 'http://localhost:5000/addNewItem';
const getRecentItemsApiUrl = 'http://localhost:5000/getRecentItems';
//const usersApiUrl = 'http://private-205f4-rajeshdasu.apiary-mock.com/users';
const addUserApiUrl = 'http://localhost:5000/addNewUser';

export const fetchUsers = (users) => {
    return {
        type: FETCH_ALL_USERS,
        users
    }
};

export const fetchRecentUsers = (recentUsers) => {
    return {
        type: FETCH_RECENT_USERS,
        recentUsers
    }
};

export const addUser = (user) => { 
    return {
        type: ADD_NEW_USER,
        user
    }
};

export const fetchAllUsers = () => {
    return (dispatch) => {
        let url = getAllItemsApiUrl + '?type=users';
        return axios.get(url)
            .then(response => {
                dispatch(fetchUsers(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchTop5Users = () => {
    return (dispatch) => {
        let url = getRecentItemsApiUrl + '?type=users&size=5';
        return axios.get(url)
            .then(response => {
                dispatch(fetchRecentUsers(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addNewUser = (formData) => {
    return (dispatch) => {
        let url = addNewItemApiUrl + '?type=users';
        return axios.post(url, formData)
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