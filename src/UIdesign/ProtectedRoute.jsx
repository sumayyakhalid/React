import React, { useEffect, useState } from 'react'
import { Outlet,Navigate } from 'react-router'

const ProtectedRoute = ({isAuthenticated, handleSetIsAuthenticated}) => {
  // const [isAuthenticated, setIsAuthenticated] =useState()

  console.log('isAuthenticated222', isAuthenticated);
  useEffect(()=>{
    let auth = localStorage.getItem("isAuthenticated")
    auth = JSON.parse(auth)
    handleSetIsAuthenticated(auth)
  },[])

  return (
    isAuthenticated ? <Outlet/>:<Navigate to='/'/>
  )
}

export default ProtectedRoute
