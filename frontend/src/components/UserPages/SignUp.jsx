import React from 'react'
import "./SignUp.css"
import Gender from './Gender'
const SignUp = () => {
   
    const handleSubmit=(e)=>{
        e.preventDefault()

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
      <form action="">
        <div>
        <label className='label p-2 '>
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input type="text" placeholder='Enter Your Name' className='w-full input input-bordered h-10'></input>
          <label className='label p-2 '>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
          <label className='label p-2 '>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'></input>

          <label className='label p-2 '>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input type="password" placeholder='Confirm Your Password' className='w-full input input-bordered h-10'></input>

          <Gender/>
         <a href="/Signup" style={{textDecoration:"None"}} className='mt-3 link link-info'>Already have an account?</a>
          <button type='submit' className=' btn-block glass mt-2 btn btn-primary btn-sm'>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
    </>
  )
}

export default SignUp
