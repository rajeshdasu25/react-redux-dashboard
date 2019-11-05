import { FETCH_RECENT_USERS } from '../actions/types';

export default function recentUsersReducer(state = [], action) {
    switch (action.type) {
        case FETCH_RECENT_USERS:
            return action.recentUsers;
        default:
            return state;
    }
}