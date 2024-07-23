import React, { useEffect, useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../action/UserAction';
const Logout = () => {
  const dispatch=useDispatch()
  const nav=useNavigate()
  const[Logout,setLogout]=useState(false)
  
  const handleLogout = (e)=>{
    e.preventDefault();
    dispatch(logoutAction())  //called action, which call backend api and post to logout
    setLogout(true)
    
  }

  

  useEffect(()=>{
    // console.log(Logout)
    if(Logout===true){
      toast.success("Logged out successfully ")
      nav("/login")
    }
  },[Logout])

  return (
    <>
      <div className='mt-auto'>
      <LogoutIcon className='w-6 h-6 text-white cursor-pointer' onClick={handleLogout} />
      </div>
    </>
  )
}

export default Logout
