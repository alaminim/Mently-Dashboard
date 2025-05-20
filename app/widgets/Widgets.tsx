'use client'
import { Menu, X } from 'lucide-react';
import React from 'react'
import Button from '../common/Button';



const widgtes = [
    {label: 'Programs'},
    {label:'Group Calls'},
    {label: 'Mentors'}, 
    {label:'Recent acitivities'},
    {label:'Applications'},
    {label:'Earnings'}, 
    {label:'Forum'},
    {label: 'Program Analysis'},
]; 
const Widgets = () => (
  <div className='w-2/6 absolute right-0 h-auto flex flex-col gap-4 bg-white p-4'>
    <div className=" p-6">
      <X  className='float-right w-6 h-6 text-violet-800  hover:border-2 border-violet-800'/>
    </div>
    <hr className="text-center w-3/4 text-zinc-300  mb-12" />
    <div className="flex flex-col justify around h-10 mb-6 font-bold p-2">
      <h1 className="text-3xl text-violet-800">Manage Widget</h1>
      <p className="text-sm font-light text-black mt-2">Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow</p>
    </div>
    <div className=" mt-6">
      {widgtes.map((item) => (<li key={item.label} className='flex justify-between mb-4 p-2 text-black'>
        
        <p className="flex gap-4 items-center font-medium"><Menu className="w-5 h-5 text-gray-800" />{item.label}</p>
        <input type="checkbox" name="" id="" className='p-2' />
      </li>)
      )}
    </div>
    <div className="flex justify-between items-center p-2 max-w-full">
    <Button children={'Save Changes'} className='w-1/2' size='large' variant='primary' />
    <Button children={'Reset to Default'} className='w-1/2' size='large' variant='secondary' />
  </div>
  </div>
)

export default Widgets
