import Contact from '../components/contact';
import Dashboard from '../components/dashboard';
import Users from '../components/users/viewAllUsers';
import Products from '../components/products';
import Queries from '../components/queries/viewAllQueries';

export const AppRoutes = [
    {
        component: Dashboard,
        path: '/',
    },
    {
        component: Users,
        path: '/users',
    },
    {
        component: Contact,
        path: '/contact',
    },
    {
        component: Products,
        path: '/products',
    },
    {
        component: Queries,
        path: '/queries',
    }
];