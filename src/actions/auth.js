import { FETCH_IND_USER } from './types';
import axios from 'axios';
import * as appConstants from '../config/constants';

export const fetchUser = (user) => { debugger;
    return {
        type: FETCH_IND_USER,
        user
    }
};

export const login = (user) => { debugger;
    return (dispatch) => {
        const url = appConstants.CHECK_USER_LOGIN_URL + '?&username=' + user.username + '&password=' + user.password;
        return axios.get(url)
            .then(response => {
                dispatch(fetchUser(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

/*export const login = (formData, message) => { debugger;
    return (dispatch) => {
        let url = appConstants.CHECK_USER_LOGIN_URL;debugger;
        return axios.post(url, formData)
            .then(response => { console.log('response: ', response);
                //if (response.status === 200) {
                    //dispatch(setStatus(false));
                //}
            })
            .catch(error => {
                throw (error);
            });
    };
};*/