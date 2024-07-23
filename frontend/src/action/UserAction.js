
import {LOGIN_REQUEST,  LOGIN_FAIL ,LOGIN_SUCCESS,SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL,
    LOADUSER_REQUEST,LOADUSER_SUCCESS,LOADUSER_FAIL,LOGOUT_SUCCESS,LOGOUT_FAIL,
CONVERSATIONS_REQUEST,CONVERSATIONS_SUCCESS,CONVERSATIONS_FAIL} from "../constants/UserConstants"
import axios from "axios"
const url=import.meta.env.VITE_BASE_URL

export const loginAction=(username,password)=>async(dispatch)=>{

    try {
        dispatch({type:LOGIN_REQUEST})
       
        const {data}=await axios.post(`${url}/api/chatapp/login`,{
            userName:username,
            password:password,
            headers: {'Content-Type': 'application/json'}
        },{withCredentials:true})
        dispatch({type:LOGIN_SUCCESS,payload:data})
        // console.log(data)
    } catch (error) {
        dispatch({type:LOGIN_FAIL,payload:error.response.data.message})

    }
}
export const signUpAction=(myform)=>async(dispatch)=>{

    try {
        dispatch({type:SIGNUP_REQUEST})
        // console.log(myform)
        // console.log(url)
        const { data } = await axios.post("http://localhost:5000/api/chatapp/signup", myform, {
            headers: { "Content-Type": "application/json" }
        });
        dispatch({type:SIGNUP_SUCCESS,payload:data})
        // console.log(data)
    } catch (error) {
        dispatch({type:SIGNUP_FAIL,payload:error.response.data.message})

    }
}

export const loadUserAction=()=>async(dispatch)=>{
    try {
        dispatch({type:LOADUSER_REQUEST})  //for loader to reducer
  
        const {data}=await axios.get(`${url}/api/chatapp/me`,{withCredentials:true});
            
        
                                                
        dispatch({type:LOADUSER_SUCCESS,  payload:data}) //sent to reducer, so that it can update
        // console.log(data)
        
    } catch (error) {
        dispatch({
          type:LOADUSER_FAIL,
          payload:error.response.data.message //The expression error.response.data.message is commonly used when handling errors from API responses in JavaScript applications, especially when using libraries like Axios for making HTTP requests.
        })
    }
}
export const logoutAction=()=>async(dispatch)=>{
    try {
       
        const {data}=await axios.get(`${url}/api/chatapp/logout`)   
        // console.log(data.message)                                                  
        dispatch({type:LOGOUT_SUCCESS}) //sent to reducer, so that it can update
       
        
    } catch (error) {
        dispatch({
          type:LOGOUT_FAIL,
          payload:error.response.data.message 
        })
    }
}

//for getting all user in sidebar
export const getAllConversationsAction=()=>async(dispatch)=>{
    try {
        dispatch({type:CONVERSATIONS_REQUEST})
        const {data}=await axios.get(`${url}/api/chatapp/getUsers`,{withCredentials:true})
                                                       
        dispatch({type:CONVERSATIONS_SUCCESS,payload:data}) //sent to reducer, so that it can update
       
        
    } catch (error) {
        dispatch({
          type:CONVERSATIONS_FAIL,
          payload:error.response.data.message 
        })
    }
}


//for clearing errors
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS" })
}