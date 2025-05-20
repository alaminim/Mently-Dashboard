import React from 'react'
import Button from '../common/Button';
import avatar from './../../public/avatar2.png';
import Image from 'next/image';
import { Url } from 'url';

interface UserProps {
    name: string; 
    email?: string;
    img?:Url
    
}

const UserProfiles = (
  {name, email, img}: UserProps
) => {
 
    return (
    <div className='flex flex-col justify-between items-center'>
     
        <div  className='flex gap-8 justify-between items-center p-4'>
            <input type="checkbox" name="" id="name"  className='p-2'/>
            <div className='flex gap-4 items-center'>
             <Image src={avatar} alt={''} className='w-8 h-8' />
            <span className="flex flex-col">
                <h2 className="font-bold text-sm text-black">
                   {name}
                </h2>
                <p className="text-gray-500 text-xs">{email}</p>
            </span>
              <Button className={''} variant='tertiary' size='small'>Reject</Button>
              <Button className={''} variant='primary' size='small'>Accept</Button>
              
            </div> 
            
      
    </div>
    </div>
  )
}

export default UserProfiles
