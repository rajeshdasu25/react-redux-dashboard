import { FETCH_ALL_PRODUCTS } from '../actions/types';

export default function productReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}