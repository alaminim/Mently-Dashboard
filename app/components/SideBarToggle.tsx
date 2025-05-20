import React from 'react'
import {PanelLeft} from 'lucide-react'

const SideBarToggle = () => {

  return (
    <div>
      <button
      className="p-2 text-white hover:bg-gray-700 rounded-md transition"
    >
       <PanelLeft className="w-6 h-6" />  
       </button>
    
    </div>
  )
}

export default SideBarToggle
