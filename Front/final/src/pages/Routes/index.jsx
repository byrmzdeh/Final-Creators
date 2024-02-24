import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({roles}) => {
    const {decode} = useContext(UserContext)
  return (
    
        roles.includes(decode?.role) ? <Outlet/> : <Navigate to={'/'}></Navigate>
      
  )
}

export default PrivateRoute
