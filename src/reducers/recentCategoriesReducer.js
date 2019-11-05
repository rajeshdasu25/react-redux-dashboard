import { FETCH_RECENT_CATEGORIES } from '../actions/types';

export default function recentCategoriesReducer(state = [], action) {
    switch (action.type) {
        case FETCH_RECENT_CATEGORIES:
            return action.recentCategories;
        default:
            return state;
    }
}