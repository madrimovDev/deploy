import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const RequireAuth = () => {
    const { isAuth } = useContext(AuthContext)
    if (isAuth) {
        return <Outlet />
    }
    return <Navigate to={'/login'} replace/>
}

export default RequireAuth