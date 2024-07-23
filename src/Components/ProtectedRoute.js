import React from 'react'
import useAuth from '../CustomHooks/UseAuth'

export function ProtectedRoute(Component) {
  return ()=>{
    const isAuthenticated =useAuth()
    return isAuthenticated?  <Component> </Component>:"You are not authenticated"
  }
}
