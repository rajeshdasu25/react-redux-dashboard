import { FETCH_ALL_USERS, FETCH_RECENT_USERS } from './types';
import axios from 'axios';

//const usersApiUrl = 'http://private-205f4-rajeshdasu.apiary-mock.com/users';//'http://localhost:5000/getUsers';
const allUsersApiUrl = 'http://localhost:5000/getAllUsers';//'http://private-205f4-rajeshdasu.apiary-mock.com/users';
const recentUsersApiUrl = 'http://localhost:5000/getRecentUsers?size=5';

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