import { FETCH_ALL_USERS } from './types';
import axios from 'axios';

const usersApiUrl = 'http://private-205f4-rajeshdasu.apiary-mock.com/users';//'http://localhost:5000/getUsers';

export const fetchUsers = (users) => {
    return {
        type: FETCH_ALL_USERS,
        users
    }
};

export const fetchAllUsers = () => {
    return (dispatch) => {
        return axios.get(usersApiUrl)
            .then(response => {
                dispatch(fetchUsers(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};