import React from 'react'
import Image from 'next/image'
import techrity from './../../public/TechrityProfile.png'
import { ChevronDown } from 'lucide-react'

const LoggedUser = () => {
  return (
    <div className='flex gap-4 items-center p-4'>
        <div className=" flex justify-center items-center  rounded-full h-20 w-20">
        <Image src={techrity} alt={'logo'} width={160} height={160} className='p-2'/>
      </div>
      <span className="flex flex-col">
        <p className="font-medium  text-zinc-900">Techrity Found...</p>
        <p className="text-xs text-zinc-500">Member</p>
      </span>
      <div className='bg-violet-800 rounded'>
      <ChevronDown  className=' p-2 text-white h-9 w-9' />
    </div>
    </div>
  )
}

export default LoggedUser
