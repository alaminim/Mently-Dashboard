'use client';
import React, { useState } from 'react'
import {PanelLeft, PanelRight} from 'lucide-react'
import Logo from './Logo';
import HelpCard from './HelpCard'
import NavLink from './NavLink'

import {
  Home,
  BookText,
  Users,
  User,
  MessagesSquare,
  Wallet,
  Gift,
  LineChart,
  Settings,
  LogOut
} from "lucide-react";


const SideBar = () => {
const [isOpen, setIsOpen] = useState(true);
const toggleSideBar = () => {
  setIsOpen(!isOpen);
}


const MenuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Programs', href: '/programs', icon: BookText  },
  { name: 'Activities', href: '/activities', icon: Users },
  { name: 'Users', href: '/users', icon: User },
  { name: 'Forum', href: '/forum', icon: MessagesSquare },
  { name: 'Finances', href: '/finances', icon: Wallet },
  { name: 'Rewards', href: '/rewards', icon: Gift },
  { name: 'Analytics', href: '/analytics', icon: LineChart},
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Logout', href: '/logout', icon: LogOut },
];

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} bg-violet-800 shadow-lg transition-all duration-300 ease-in-out flex flex-col`} >
      <header  className='bg-inherit'>
      {isOpen ? (
             <div className='flex justify-between p-4'>
              <Logo/>
              <button onClick={toggleSideBar}>
               <PanelLeft/>
            </button>
             </div> 
         ) :
         (
          <div className=' bg-violet-800 p-4'>
              <button onClick={toggleSideBar}>
               <PanelRight/>
            </button>
             </div> 
         )}
      </header>
      <div>
        
    <NavLink links={MenuItems}
      className="flex flex-col gap-2 p-2 flex-1/2"/>
      </div>
 
<div className="p-2">
<HelpCard/>
</div>

    </div>
          
  )
}
export default SideBar
