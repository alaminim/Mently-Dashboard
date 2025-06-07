import React from 'react'
import Image from 'next/image'
import Logos from './../../public/techrity-logo.png'

const Logo = () => {
  return (
   
    <Image
         src={Logos}
         alt='techrity-logo'
         width={140}
         height={140}
         className='p-4'
         />
  )
}

export default Logo
