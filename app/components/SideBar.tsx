'use client';
import React from 'react'
import Image from 'next/image'
import SideBarToggle from './SideBarToggle'
import Logo from './../../public/techrity-logo.png'
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
    <div className='bg-violet-800 '>
      <header className='flex justify-between mb-3 p-4'>
      <Image
         src={Logo}
         alt='techrity-logo'
         width={100}
         height={100}
         />
         <SideBarToggle/>
      </header>
      <div>
    <NavLink links={MenuItems}
      className="flex flex-col gap-2 p-2"/>
      </div>
 
<div className="p-2">
<HelpCard/>
</div>
    </div>
  )
}
export default SideBar
