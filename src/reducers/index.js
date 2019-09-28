import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import categories from './categoryReducer';
import products from './productReducer';
import users from './userReducer';

const rootReducer = combineReducers({
    categories: categories,
    products: products,
    users: users,
    form: formReducer
});

export default rootReducer;