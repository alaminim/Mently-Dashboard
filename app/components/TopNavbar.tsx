import React from 'react'
import LoggedUser from './LoggedUser'
import { Bell } from 'lucide-react'

const TopNavBar = () => {
  return (
    <div className='top-0 left-64 fixed w-full h-16  bg-white flex mb-12'>
       <div className="-mt-6 absolute right-70 flex gap-8 items-center">
        <div>
    <Bell  className='w-6 h-6 text-gray-600 font-bold ' />
        <span className='relative rounded-full bg-red-600 w-2.5 h-2.5'></span>
      </div>
      <LoggedUser />
      </div>
    </div>
  )
}

export default TopNavBar
