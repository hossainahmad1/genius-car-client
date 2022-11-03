import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';



const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <h1 className='text-5xl'>loading....</h1>
    }
    if(user){
        return children
    }
    return <Navigate to ='/login' state={{from:location}} replace/>
};

export default PrivateRoute;