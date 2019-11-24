import { FETCH_RECENT_QUERIES } from '../actions/types';

export default function recentQueriesReducer(state = [], action) {
    switch (action.type) {
        case FETCH_RECENT_QUERIES:
            return action.recentQueries;
        default:
            return state;
    }
}