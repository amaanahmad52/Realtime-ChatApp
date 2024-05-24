import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <>
    <form className='flex items-center gap-2' >
      
      <input type="text" className='ml-3 mt-2 input input-bordered rounded-full' placeholder='Search...' />
      <button type='submit' className=' mt-2 mr-2 btn btn-circle bg-sky-500 text-white'>
        <SearchIcon className='w-6 h-6 outline-none'/>
      </button>

    </form>
    </>
  )
}

export default SearchBar
