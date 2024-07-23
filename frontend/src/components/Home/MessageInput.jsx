import React, { useContext, useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import PendingIcon from '@mui/icons-material/Pending';
import { chatContext } from '../../ContextApi/chatcontext';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessagesAction } from '../../action/MessagesAction';

const MessageInput = () => {
  const [messageTyped, setMessageTyped] = useState("");

  const { selected,render,setRender} = useContext(chatContext);

  const dispatch = useDispatch();

  const handleMessage = (e) => {
    e.preventDefault();
    // Call sendMessage action
    if(messageTyped==="")return
    dispatch(sendMessagesAction(messageTyped, selected));
    dispatch({ type: "EmptySendState" });
    setMessageTyped("")
    
    setRender(true)
  };

  const { success } = useSelector((state) => state.sendMessageReducer || { success: false });

  // useEffect(()=>{
  //   console.log(success)
  // },[success]);


  return (
    <>
      <form className='px-4 my-3' onSubmit={handleMessage}>
        <div className='w-full relative'>
          <input
            type='text'
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            placeholder='Send a message'
            value={messageTyped}
            onChange={(e) => setMessageTyped(e.target.value)}
          />
          <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            {success ? <PendingIcon /> : <SendIcon />}
          </button>
        </div>
      </form>
    </>
  );
};

export default MessageInput;
