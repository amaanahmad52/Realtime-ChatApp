import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <>
    <div className='flex flex-1 flex-col overflow-auto px-4'>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    </div>  
    </>
  )
}

export default Messages
