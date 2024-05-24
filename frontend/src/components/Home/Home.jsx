import React from 'react'
import Sidebar from './Sidebar'
import MessageBox from './MessageBox'

const Home = () => {
  return (
    <>
      <div className='flex flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar/>
        <MessageBox/>
      </div>
    </>
  )
}

export default Home
