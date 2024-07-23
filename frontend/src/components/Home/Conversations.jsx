import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllConversationsAction } from '../../action/UserAction';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { emojiGenerator } from '../../assets/emojis';
import Conversation from './Conversation';

import { chatContext } from "../../ContextApi/chatcontext";

const Conversations = ({ searchItem }) => {
  const dispatch = useDispatch();
  const { loading, users = [], error } = useSelector((state) => state.getAllConversationsReducer);
  const { selected, setSelected ,selectedName,setSelectedName,selectedAvatar,setSelectedAvatar} = useContext(chatContext);

  useEffect(() => {
    dispatch(getAllConversationsAction());

    if (error) {
      toast.error(error);
    }
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='py-2 flex flex-col overflow-auto'>
          {users.filter((item) => {
            return searchItem.trim() === '' ? item : item.fullname.toLowerCase().includes(searchItem.toLowerCase());
          }).map((u, index) => (
            <Conversation
              key={u._id}
              id={u._id}
              name={u.fullname}
              avatar={u.avatar}
              gender={u.gender}
              emoji={emojiGenerator()}
              lastIndex={index === users.length - 1 ? 1 : 0}
              onClick={() => {
                if (selected === u._id) {
                  setSelected("");
                  setSelectedName("");
                  setSelectedAvatar("");
                } else {
                  setSelected(u._id);
                  setSelectedName(u.fullname);
                  setSelectedAvatar(u.avatar)
                }
              }}
              selected={selected}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Conversations;
