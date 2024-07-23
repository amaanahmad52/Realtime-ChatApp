import {LOGIN_REQUEST,  LOGIN_FAIL ,LOGIN_SUCCESS,SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL,
  LOADUSER_REQUEST,LOADUSER_SUCCESS,LOADUSER_FAIL,LOGOUT_SUCCESS,LOGOUT_FAIL,
  CONVERSATIONS_REQUEST,CONVERSATIONS_SUCCESS,CONVERSATIONS_FAIL
} from "../constants/UserConstants"


export const loginReducer=(state = {user:{}}, action)=>{
    switch (action.type) {
        case LOGIN_REQUEST: 
          return {
            loading: true,
            isAuthenticated: false,
          };
        case LOGIN_SUCCESS:
          return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user:action.payload.userfind
           };
        case LOGIN_FAIL:
          return {
            loading: false,
            isAuthenticated: false,
            user: null,      
            error: action.payload, 
            
          };
        case "CLEAR_ERRORS":
          return {
            ...state,
            error: null,
          };
        default:
          return state;
      }
}
export const signUpReducer=(state = {user:{}}, action)=>{
    switch (action.type) {
        case SIGNUP_REQUEST: 
          return {
            loading: true,
            success: false
          };
        case SIGNUP_SUCCESS:
          return {
            ...state,
            loading: false,
            success: true,
            user:action.payload.user
           };
        case SIGNUP_FAIL:
          return {
            loading: false,
            user:null,  
            success: false,
          };
        case "CLEAR_ERRORS":
          return {
            ...state,
            error: null,
          };
        default:
          return state;
      }
}
export const LoadUserReducer=(state = {user:{}}, action)=>{
    switch (action.type) {
        case LOADUSER_REQUEST: 
          return {
            loading: true,
            isAuthenticated: false,
          };
        case LOADUSER_SUCCESS:
          return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user:action.payload.user
           };
        case LOADUSER_FAIL:
          return {
            loading: false,
            isAuthenticated: false,
            user: null,
            error: action.payload,
          };
        case "CLEAR_ERRORS":
          return {
            ...state,
            error: null,
          };
        default:
          return state;
      }
}
export const LogoutReducer=(state = {}, action)=>{
    switch (action.type) {
        case LOGOUT_SUCCESS:
          return {
            loading: false,
            user:null,
            isAuthenticated: false,
           };
        case LOGOUT_FAIL:
          return {
            isAuthenticated:true,
            loading: false,
            error: action.payload,
          };
        case "CLEAR_ERRORS":
          return {
            ...state,
            error: null,
          };
        default:
          return state;
      }
}

export const getAllConversationsReducer=(state={},action)=>{

        switch(action.type){
          case CONVERSATIONS_REQUEST:
            return{
              loading:true,
               users:null
            }
          case CONVERSATIONS_SUCCESS:
            return{
              ...state,
              loading:false,
              users:action.payload.users
            }
          case CONVERSATIONS_FAIL:
            return{
              loading:true,
              error:action.payload
          }
          case "CLEAR ERRORS":
            return{
              ...state,
                error: null
            }
          default:
            return state;

        }
       
}
