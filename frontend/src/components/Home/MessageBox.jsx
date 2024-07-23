import React, { useContext, useEffect, useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import ForumIcon from '@mui/icons-material/Forum';
import { chatContext } from '../../ContextApi/chatcontext';
import { useSelector } from 'react-redux';

const name = "USER";

const MessageBox = () => {
  const { selected, selectedName, setSelected } = useContext(chatContext);
  const nochatselected = selectedName === "";
  

  useEffect(() => {
    // cleanup context when component unmounts
    return () => setSelected(null);
  }, [setSelected]);

 
 

  return (
    <>
      {nochatselected ? <NoChatSelected /> : (
        <div className='flex flex-col md:min-w-[450px]'>
          {/* header */}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:&nbsp;</span>
            <span className='text-gray-900 font-bold'>{selectedName}</span>
          </div>

          <Messages />
          <MessageInput />
        </div>
      )}
    </>
  );
};

export default MessageBox;

const NoChatSelected = () => {
  const {user}=useSelector((s)=>s.LoadUserReducer)
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold gap-2 items-center'>
        <p>Welcome {user?user.fullname:name}</p>
        <p>Select a chat to start messaging</p>
        <ForumIcon className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};
