import React, { useEffect, useState } from 'react';
import './Login.css'; // Assuming this file contains CSS styles for your login form.
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loginAction } from '../../action/UserAction';
import Loader from "../Home/Loader"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  // const dispatch=useDispatch()
  // const nav=useNavigate()
  // const[email,setEmail]=useState("")
  // const[password,setPassword]=useState("")

  // const {loading,isAuthenticated,error}=useSelector((s)=>s.loginReducer)
  // useEffect(()=>{
    
  //   if(isAuthenticated){
      
  //     toast.success("Login success")
  //     nav("/me")
  //   }
  //   if(error){
  //     alert(error)
  //     dispatch(clearErrors())
         
  //   }
  // },[isAuthenticated,error,nav])ty

  
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   dispatch(loginAction(email,password))
  // }
  return ( 
    <>
    {/* {loading===true ? <Loader/>:( */}
    <div class="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div class="p-5 h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <h1 class="text-3xl font-semibold text-center text-gray-300">
        Login
        <span class="text-blue-500">
        &nbsp;ChatApp
        </span>
      </h1>
      <form action="">
        <div>
          <label className='label p-2 '>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type="text" placeholder='Enter Your Username' className='w-full input input-bordered h-10'></input>
          <label className='label p-2 '>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type="password" placeholder='Enter Your Password' className='w-full input input-bordered h-10'></input>
          <button type='submit' className=' btn-block glass mt-2 btn btn-primary btn-sm'>Login</button>
         <a href="/Signup" style={{textDecoration:"None"}} className='mt-3 link link-info'>Don`t have an account?</a>
        </div>
      </form>
    </div>
  </div>
    {/* )} */}
    </>
  );
};

export default Login;


