import {MESSAGES_REQUEST,MESSAGES_SUCCESS,MESSAGES_FAIL,
     SENDMESSAGES_REQUEST,SENDMESSAGES_SUCCESS,SENDMESSAGES_FAIL
} from "../constants/MessagesConstant"


export const getAllMessagesReducer=(state={},action)=>{
    
    switch (action.type) {
        case MESSAGES_REQUEST:
            return{
                ...state,
                loading:true,
                allMessages:null
            }
            
        case MESSAGES_SUCCESS:
            return{
                ...state,
                allMessages:action.payload,
                loading:false
            }

        case MESSAGES_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const sendMessagesReducer=(state={success:false},action)=>{
    switch (action.type) {
        case SENDMESSAGES_REQUEST:
            return{
                success: false,
                // message:null,
               
            }
        case SENDMESSAGES_SUCCESS:
            return{
                ...state,
                success:action.payload.success,
                // message:action.payload.messageSent.message
            }
        case SENDMESSAGES_FAIL:
            return{
                success:false,
                error:action.payload
            }  
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null,
            };
        case "EmptySendState":
            return{
                success:false
            }
        default:
            return state;
    }
}