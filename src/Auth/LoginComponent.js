import React, { useEffect } from 'react'
import useAuth from '../CustomHooks/UseAuth'
import { useNavigate } from 'react-router-dom'

export function LoginComponent() {
  const navigate=useNavigate()
  const isAuthenticated =useAuth()
  useEffect(()=>{
    
    if(isAuthenticated){
      navigate('/login')
    }
  })
  return <>
  <div>
    <h3> Login Page</h3>
  </div>
  
  </>
}
