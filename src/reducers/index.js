import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modal from './modalReducer';
import category from './indCategoryReducer';
import categories from './categoryReducer';
import product from './indProductReducer';
import products from './productReducer';
import users from './userReducer';
import recentCategories from './recentCategoriesReducer';
import recentProducts from './recentProductsReducer';
import recentUsers from './recentUsersReducer';

const rootReducer = combineReducers({
    category: category,
    categories: categories,
    product: product,
    products: products,
    users: users,
    modal: modal,
    form: formReducer,
    recentCategories: recentCategories,
    recentProducts: recentProducts,
    recentUsers: recentUsers
});

export default rootReducer;