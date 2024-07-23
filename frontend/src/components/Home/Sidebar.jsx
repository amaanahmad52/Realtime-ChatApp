import React, { useState } from 'react'
import SearchBar from './SearchBar'

import Logout from './Logout'
import Conversations from './Conversations'

const Sidebar = () => {
  const[searchItem,SetSearchItem]=useState("")
  return (
    <>
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchBar searchItem={searchItem} SetSearchItem={SetSearchItem}/>
      <div className='divider px-3'></div>
      <Conversations searchItem={searchItem}/>
      <Logout/>

    </div>
    </>
  )
}

export default Sidebar
