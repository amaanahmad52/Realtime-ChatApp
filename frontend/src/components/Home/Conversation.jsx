import React from 'react';

const Conversation = React.memo(({ id, name, avatar, emoji, lastIndex, onClick, selected }) => {
  const isSelected = selected === id;
// console.log(isSelected)
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-blue-400' : ''}`}
        onClick={onClick}
      >
        <div className=''>
          <div className='w-12 rounded-full'>
            <img
              src={avatar ? avatar : 'https://cdn.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'}
              alt='user avatar'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{name}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && <div className={'divider h-1 my-0 py-0'} />}
    </>
  );
});

export default Conversation;
