import { ADD_NEW_USER, FETCH_ALL_USERS, FETCH_RECENT_USERS } from './types';
import { setStatus } from './modal';
import axios from 'axios';

//const usersApiUrl = 'http://private-205f4-rajeshdasu.apiary-mock.com/users';//'http://localhost:5000/getUsers';
const allUsersApiUrl = 'http://localhost:5000/getAllUsers';//'http://private-205f4-rajeshdasu.apiary-mock.com/users';
const recentUsersApiUrl = 'http://localhost:5000/getRecentUsers?size=5';
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
        return axios.get(allUsersApiUrl)
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
        return axios.get(recentUsersApiUrl)
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
        return axios.post(addUserApiUrl, formData)
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