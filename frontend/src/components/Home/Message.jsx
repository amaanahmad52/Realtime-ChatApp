import React, { useContext } from 'react';
import { chatContext } from '../../ContextApi/chatcontext';
import { useSelector } from 'react-redux';

const Message = ({ message }) => {
  const { selected: hisId, selectedName: hisName, selectedAvatar: hisAvatar } = useContext(chatContext);
  const { user } = useSelector((state) => state.LoadUserReducer || {});
  
  if (!user) {
    return <div>Loading...</div>; // Handle the case when `user` is not available
  }

  const fromMe = user._id === message.sender;
  const chatClass = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? user.avatar : hisAvatar;
  const bubbleColor = fromMe ? 'bg-blue-500' : 'bg-gray-500';

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor}`}>
        {message.message || 'No message content'}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {new Date(message.createdAt).toLocaleTimeString()} {/* Format the timestamp */}
      </div>
    </div>
  );
};

export default Message;
