import { FETCH_IND_PRODUCT } from '../actions/types';

export default function indProductReducer(state = [], action) {
    switch (action.type) {
        case FETCH_IND_PRODUCT:
            return action.product;
        default:
            return state;
    }
}