'use client';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface NavLinkProps {
 links: NavItem[];
 className?:string;

}


const NavLink = ({links, className}: NavLinkProps) => {
  
  const pathname = usePathname();

  return (
    <nav className={className}>
    
{links.map((item)=> (
  <Link key={item.name}
        href={item.href} 
        className={clsx (
          "flex font-bold items-center gap-4 p-4 rounded hover:bg-violet-700 text-white",
          {
            'bg-violet-500 text-white': pathname === item.href,
          },
        )}>
          <item.icon/>
          <span>{item.name}</span>
        </Link>
))}
    </nav>
  )
}

export default NavLink
