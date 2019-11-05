import { FETCH_RECENT_PRODUCTS } from '../actions/types';

export default function recentProductsReducer(state = [], action) {
    switch (action.type) {
        case FETCH_RECENT_PRODUCTS:
            return action.topProducts;
        default:
            return state;
    }
}