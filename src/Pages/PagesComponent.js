import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../CustomHooks/UseAuth'

export function PagesComponent() {
  const navigate=useNavigate()
  const isAuthenticated =useAuth()
  useEffect(()=>{
    
    // if(!isAuthenticated){
    //   navigate('/login')
    // }
  })
  return (
    <div> Pages Component</div>
  )
}
