import Home from "./components/Home"; 
import Login from "./components/Login";

const AppRoutes = [
    {
        index: true,
        element: <Login />
    },
    {
        path: '/Home',
        element: <Home />
    },
];

export default AppRoutes;
