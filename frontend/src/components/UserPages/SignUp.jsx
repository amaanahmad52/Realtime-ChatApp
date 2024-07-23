import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';

import {toast} from 'react-toastify';
import Gender from './Gender'
import { clearErrors, signUpAction } from '../../action/UserAction';

const SignUp = () => {
  const dispatch=useDispatch()
  const {error,success,user}=useSelector((s)=>(s.signUpReducer))
  const nav=useNavigate()
   const[fullname,setFullname]=useState("");
   const[email,setEmail]=useState("");
   const[userName,setUserName]=useState("");
   const[password,setPassword]=useState("");
   const[confirmpassword,setConfirmpassword]=useState("");
   const [gender, setGender] = useState(""); 
 
  useEffect(()=>{
    if(error){
      toast.error(`${error}`)
      dispatch(clearErrors());
    }
    if(success){
      nav("/me");
      toast.info(`Hi! ${user.fullname}`)  
     
    }
  },[error,success])
    const handleSubmit = async(e) => {
        e.preventDefault();
        const myform = new FormData();
        myform.set('userName', userName);
        myform.set('fullname', fullname);
        myform.set('email', email);
        myform.set('password', password);
        myform.set('confirmpassword', confirmpassword);
        myform.set('gender', gender);
       
        dispatch(signUpAction(myform))

    }
  return (
    <>
      <div class="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div class="p-5 h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <h1 class="text-3xl font-semibold text-center text-gray-300">
        SignUp
        <span class="text-blue-500">
        &nbsp;ChatApp
        </span>
      </h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>
        <label className='label p-2 '>
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input type="text" placeholder='Enter Your Name' className='w-full input input-bordered h-10' value={fullname} onChange={(e)=>(setFullname(e.target.value))}></input>
          <label className='label p-2 '>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' value={userName} onChange={(e)=>(setUserName(e.target.value))} ></input>
          <label className='label p-2 '>
            <span className='text-base label-text'>Email</span>
          </label>
          <input type="text" placeholder='Enter Email' className='w-full input input-bordered h-10' value={email} onChange={(e)=>(setEmail(e.target.value))} ></input>
          <label className='label p-2 '>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' value={password} onChange={(e)=>(setPassword(e.target.value))} ></input>

          <label className='label p-2 '>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input type="password" placeholder='Confirm Your Password' className='w-full input input-bordered h-10' value={confirmpassword} onChange={(e)=>(setConfirmpassword(e.target.value))}></input>

          <Gender gender={gender} setGender={setGender} />

         <Link to="/login" style={{textDecoration:"None"}} className='mt-3 link link-info'>Already have an account?</Link>
          <button type='submit' className=' btn-block glass mt-2 btn btn-primary btn-sm'>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
    </>
  )
}

export default SignUp
