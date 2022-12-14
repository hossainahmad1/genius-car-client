import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";
import CheckOut from "../../CheckOut/CheckOut";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Orders from "../../Orders/Orders";
import OrdersRow from "../../Orders/OrdersRow";
import SignUp from "../../SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/ordersrow',
                element: <OrdersRow></OrdersRow>
            }

        ]

    }
])