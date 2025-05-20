import Link from 'next/link'
import React from 'react'
import { EllipsisVertical, Menu } from 'lucide-react'

interface HeaderProps {
  title: string;
  icon?: React.ElementType;
  children?: React.ReactNode;

}

const ProgramToolkit = ({title, children,icon:Icon}: HeaderProps) => {
  return (
    <header className="flex flex-col w-full p-2">
    <div className="heading_tools flex justify-between items-center gap-4 mb-4">
    <div className="flex gap-2">
        <Menu  className="w-5 h-5 text-gray-800" />
        <p className="font-bold text-gray-600">
            {title}
        </p>
    </div>
     {Icon && <Icon className="w-5 h-5 text-gray-800" />}
    <div className="flex gap-2">
        <Link href={""} className=" font-bold text-violet-800">See all</Link>
        <EllipsisVertical className='w-5 h-5 text-violet-950' />
    </div>
    </div>
    {children}
</header>
  )
}

export default ProgramToolkit
