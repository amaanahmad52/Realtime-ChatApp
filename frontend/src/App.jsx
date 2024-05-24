import { useState } from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom";

import Login from './components/UserPages/Login'
import SignUp from './components/UserPages/SignUp'
import Home from './components/Home/Home';
import MessageBox from './components/Home/MessageBox';


function App() {
  

  return (
    <>
    {/* <BrowserRouter>
      <Routes> */}
        <div className='p-4 h-screen flex items-center justify-center'>
            {/* <Login/> */}
            {/* <SignUp/> */}
            <Home/>
            
            
        </div>
        {/* <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>

      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App
