import { GET_MODAL_STATUS, SET_MODAL_STATUS } from './types';

export const getStatus = (status) => {
    return {
        type: GET_MODAL_STATUS,
        modal: {
            showAddCategoryModal: status,
            addCategory: status,
            viewCategory: status,
            editCategory: status
        }
    }
};

export const setStatus = (type, status) => { //debugger; console.log('this:', this);console.log(type, status);
    return {
        type: SET_MODAL_STATUS,
        modal: {
            showAddCategoryModal: status,
            addCategory: status,
            viewCategory: status,
            editCategory: status,
            addUser: status,
            type: status
        }
    }
};

export const getModalStatus = () => {
    return (dispatch) => {
        dispatch(getStatus(false));
    };
};

export const displayModal = (val) => {
    return (dispatch) => {
        dispatch(setStatus(val));
    };
};

export const showModal = (type, status) => { 
    return (dispatch) => {
        dispatch(setStatus(type, status));
    };
};

export const hideModal = () => {
    return (dispatch) => {
        dispatch(setStatus(false));
    };
};