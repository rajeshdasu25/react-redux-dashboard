import { FETCH_ALL_CATEGORIES } from '../actions/types';

export default function categoryReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}