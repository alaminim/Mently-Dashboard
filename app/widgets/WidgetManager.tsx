import React from 'react'
import { LayoutPanelLeft} from 'lucide-react';

const WidgetManager = () => {
 
  return (
    <div className=' float-right border border-violet-700 m-12 w-8 h-8 rounded hover:bg-violet-700 '>
      <button className='flex justify-center items-center w-full h-full'>
      <LayoutPanelLeft   className='p-2 text-white w-8 h-8'/>
      </button>
    </div>
  )
}

export default WidgetManager
