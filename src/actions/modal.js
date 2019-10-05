import { GET_MODAL_STATUS, SET_MODAL_STATUS } from './types';

export const getStatus = (status) => {
    return {
        type: GET_MODAL_STATUS,
        modal: {
            showAddCategoryModal: status
        }
    }
};

export const setStatus = (status) => {
    return {
        type: SET_MODAL_STATUS,
        modal: {
            showAddCategoryModal: status
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

export const showModal = () => {
    return (dispatch) => {
        dispatch(setStatus(true));
    };
};

export const hideModal = () => {
    return (dispatch) => {
        dispatch(setStatus(false));
    };
};