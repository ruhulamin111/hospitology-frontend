import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import Loading from '../Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation()
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;