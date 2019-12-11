import { FETCH_IND_USER } from '../actions/types';

export default function indUserReducer(state = [], action) { debugger;
    switch (action.type) {
        case FETCH_IND_USER:
            return action.LoggedUser;
        default:
            return state;
    }
}