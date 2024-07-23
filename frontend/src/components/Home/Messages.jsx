import React, { useContext, useEffect, useRef } from 'react'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import Loader from './Loader';
import { getAllMessagesAction } from '../../action/MessagesAction';
import { chatContext } from '../../ContextApi/chatcontext';
import MessageSkeleton from './MessageSkeleton';

const Messages = () => {
  //call the action and get all the messages of selected user 
  const{selected,render,setRender}=useContext(chatContext)
  const dispatch=useDispatch()
  const{error,allMessages,loading}=useSelector((s)=>s.getAllMessagesReducer)
 

  useEffect(()=>{ 
    dispatch(getAllMessagesAction(selected));

    if (error) {
      toast.error(error);
    }
    setRender(false)
  }, [dispatch, error,render]);

  const showlastmessageDiv=useRef()

  useEffect(()=>{
    // setTimeout(()=>{  //used due to delay in rendering
      showlastmessageDiv.current?.scrollIntoView({behavior:"smooth"})
    // },100)
    
  },[allMessages])

  return (
      <>
       <div className='flex flex-1 flex-col overflow-auto px-4'>
        {loading? (
          [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)
        ) :
            (
            allMessages && allMessages.chatHistory.map((value)=>(
                <div key={value.sender} ref={showlastmessageDiv}>
                  <Message message={value}/>
                </div>
            ))
          )
        }
      </div>
    
    </>
    
   
  )
}

export default Messages
