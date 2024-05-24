import {configureStore} from "@reduxjs/toolkit" 
// import { rootReducer } from "./reducers" 
import { loginReducer } from "./reducers/UserReducer"
const store=configureStore({
  reducer:{
    loginReducer
  },
  devTools: true, // Enable Redux DevTools extension
  
})

export default store