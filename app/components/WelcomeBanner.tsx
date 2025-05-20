import React from 'react'
import { PiHandFill } from "react-icons/pi";

const WelcomeBanner = () => {
  return (
    <div className='flex justify-between items-center bg-violet-800 w-full h-12 p-6 rounded'>
        <h1 className="text-2xl font-bold text-white">Welcome Aboard, Blessing
            <PiHandFill className="inline-block ml-2 text-amber-500 rotate-45" />
             </h1>
        <p className="text-white font-medium">we're thrilled to have you joined the techrity team </p>
        <button className="rounded bg-white text-violet-800 font-bold w-35 h-8">Update profile</button>
      
    </div>
  )
}

export default WelcomeBanner
