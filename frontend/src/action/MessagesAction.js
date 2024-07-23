import {MESSAGES_REQUEST,MESSAGES_SUCCESS,MESSAGES_FAIL,
    SENDMESSAGES_REQUEST,SENDMESSAGES_SUCCESS,SENDMESSAGES_FAIL
} from "../constants/MessagesConstant"
import axios from "axios"

const url=import.meta.env.VITE_BASE_URL

//for getting all messages of selected user in messageBox
export const getAllMessagesAction=(id)=>async(dispatch)=>{
    try {
        dispatch({type:MESSAGES_REQUEST})
        const {data}=await axios.get(`${url}/api/chatapp/getMessages/${id}`,{withCredentials:true})
        // console.log(data)                                              
        dispatch({type:MESSAGES_SUCCESS,payload:data}) //sent to reducer, so that it can update
       
        
    } catch (error) {
        dispatch({
          type:MESSAGES_FAIL,
          payload:error.response.data.message 
        })
    }
}

//for sending  messages to selected user
export const sendMessagesAction=(input,id)=>async(dispatch)=>{
    try {
        dispatch({type:SENDMESSAGES_REQUEST})
        const {data}=await axios.post(`${url}/api/chatapp/send/${id}`, {
            message:input,
            headers: { "Content-Type": "application/json" }
        },{withCredentials:true})
        // console.log(data)                                              
        dispatch({type:SENDMESSAGES_SUCCESS,payload:data}) //sent to reducer, so that it can update
       
        
    } catch (error) {
        dispatch({
          type:SENDMESSAGES_FAIL,
          payload:error.response.data.message 
        })
    }
}

//for clearing errors
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS" })
}