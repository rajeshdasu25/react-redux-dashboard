import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modal from './modalReducer';
import category from './indCategoryReducer';
import categories from './categoryReducer';
import product from './indProductReducer';
import products from './productReducer';
import users from './userReducer';
import LoggedUser from './indUserReducer';
import queries from './queryReducer';
import recentCategories from './recentCategoriesReducer';
import recentProducts from './recentProductsReducer';
import recentUsers from './recentUsersReducer';
import recentQueries from './recentQueriesReducer';
import allItemCategories from './allItemsReducer';

const rootReducer = combineReducers({
    category: category,
    categories: categories,
    product: product,
    products: products,
    users: users,
    LoggedUser: LoggedUser,
    queries: queries,
    modal: modal,
    form: formReducer,
    recentCategories: recentCategories,
    recentProducts: recentProducts,
    recentUsers: recentUsers,
    recentQueries: recentQueries,
    allItems:  {
        categories: allItemCategories
    },
    anItem: {
        category: category,
        product: product
    },
    recentItems: {
        categories: recentCategories,
        products: recentProducts,
        users: recentUsers
    }
});

export default rootReducer;