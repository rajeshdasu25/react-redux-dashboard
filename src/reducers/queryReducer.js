import { FETCH_ALL_QUERIES } from '../actions/types';

export default function queryReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_QUERIES:
            return action.queries;
        default:
            return state;
    }
}