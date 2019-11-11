import { FETCH_ALL_ITEMS } from '../actions/types';

export default function itemReducer(state = [], action) { 
    switch (action.type) {
        case FETCH_ALL_ITEMS: console.log('reducer action: ', action);
            return action.allItems;
        default:
            return state;
    }
}