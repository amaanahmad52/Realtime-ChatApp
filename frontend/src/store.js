import {configureStore} from "@reduxjs/toolkit" 
// import { rootReducer } from "./reducers" 
import { LoadUserReducer, LogoutReducer, getAllConversationsReducer, loginReducer, signUpReducer } from "./reducers/UserReducer"
import { getAllMessagesReducer, sendMessagesReducer } from "./reducers/MessagesReducer"
const store=configureStore({
  reducer:{
    loginReducer,
    signUpReducer,
    LoadUserReducer,
    LogoutReducer,
    getAllConversationsReducer,
    getAllMessagesReducer,
    sendMessagesReducer
  },
  devTools: true, // Enable Redux DevTools extension
  
})

export default store