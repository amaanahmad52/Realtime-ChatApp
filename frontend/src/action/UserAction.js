
import {LOGIN_REQUEST,  LOGIN_FAIL ,LOGIN_SUCCESS} from "../constants/UserConstants"
import axios from "axios"
const url=import.meta.env.VITE_BASE_URL
console.log(url)
export const loginAction=(email,password)=>async(dispatch)=>{

    try {
        dispatch({type:LOGIN_REQUEST})

        const {data}=await axios.post(`${url}/api/chatapp/login`,{
            email:email,
            password:password,
            headers: {'Content-Type': 'application/json'}
        })
        dispatch({type:LOGIN_SUCCESS,payload:data})
        // console.log(data)
    } catch (error) {
        dispatch({type:LOGIN_FAIL,payload:error.response.data.message})

    }
}

//for clearing errors
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS" })
}