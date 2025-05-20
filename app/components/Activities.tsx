import React from 'react'
import Button from '../common/Button';
import avatar from './../../public/avatar2.png';
import Image from 'next/image';
import { Url } from 'url';

interface UserProps {
    name: string; 
    title: string;
    timer: string;
    img?:Url
    
}

const Activities = (
  {name, title, img, timer}: UserProps
) => {
 
    return (
    <div className='flex flex-col justify-between items-center'>
        <div  className='flex gap-8 justify-between items-center p-4'>
            <div className='flex gap-7 items-center'>
             <Image src={avatar} alt={''} className='w-8 h-8' />
            <span className="flex flex-col">
                <h2 className="font-bold text-sm text-black">
                   {name}
                </h2>
                <p className="text-gray-500 text-xs">{title}</p>
                <p className="text-gray-500 text-xs">{timer}</p>

            </span>
              
              
            </div> 
            
      
    </div>
    </div>
  )
}

export default Activities
