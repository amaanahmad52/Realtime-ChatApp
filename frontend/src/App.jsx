import { useEffect, useState } from 'react'
import {BrowserRouter ,Routes,Route, Navigate} from "react-router-dom";
// import store from "./store";
import Login from './components/UserPages/Login'
import SignUp from './components/UserPages/SignUp'
import Home from './components/Home/Home';

import { useDispatch, useSelector } from 'react-redux';
import { loadUserAction } from './action/UserAction';


function App() {
  const dispatch=useDispatch()
  const{isAuthenticated}=useSelector((s)=>(s.LoadUserReducer))

  useEffect(()=>{
   dispatch(loadUserAction())
  },[])
  
  return (
    <>
 
    <BrowserRouter>
    <div className='p-4 h-screen flex items-center justify-center'>

      <Routes>
        <Route exact path='/login' element={isAuthenticated? <Navigate to="/"/>:<Login/>}></Route>
        <Route exact path='/signup' element={isAuthenticated? <Navigate to="/"/>:<SignUp/>}></Route>     
        {/* <Route exact path='/' element={isAuthenticated ? <Home /> :<Navigate to={"/login"}/>} />     */}
        <Route exact path='/' element={ <Home /> } />    
      </Routes>
    </div>
    </BrowserRouter>
   
    </>
  )
}

export default App
