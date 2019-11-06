import { FETCH_IND_CATEGORY } from '../actions/types';

export default function indCategoryReducer(state = [], action) {
    switch (action.type) {
        case FETCH_IND_CATEGORY:
            return action.category;
        default:
            return state;
    }
}