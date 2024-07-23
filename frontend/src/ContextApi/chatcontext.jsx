import { createContext, useState } from 'react';

export const chatContext = createContext();

export const ChatProvider = (props) => {
  const [selected, setSelected] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [render, setRender] = useState(false);
  
  return (
    <chatContext.Provider value={{ selected, setSelected,selectedName,setSelectedName,setSelectedAvatar,selectedAvatar,render,setRender}}>
      {props.children}
    </chatContext.Provider>
  );
};
