import Contact from '../components/contact';
import Dashboard from '../components/dashboard';
import Users from '../components/users';
import Products from '../components/products';

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
    }
];