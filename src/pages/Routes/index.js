import Home from "../Home";
import Users from "../Users";

const PublicRoutes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/User',
        component: Users
    }
];

export { PublicRoutes };
