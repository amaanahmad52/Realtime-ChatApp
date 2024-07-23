import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
const SearchBar = ({searchItem,SetSearchItem}) => {

  const nav=useNavigate()

 
  return (
    <>
    <form className='flex items-center gap-2'  >
      
      <input type="text" className='ml-3 mt-2 input input-bordered rounded-full' placeholder='Search...' name='searchItem' value={searchItem} onChange={(e)=>SetSearchItem(e.target.value)}/>
      <button type='submit' className=' mt-2 mr-2 btn btn-circle bg-sky-500 text-white'>
        <SearchIcon className='w-6 h-6 outline-none'/>
      </button>

    </form>
    </>
  )
}

export default SearchBar
