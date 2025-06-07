import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';
import { EllipsisVertical, Menu } from 'lucide-react';

export const Title = ({ children }: { children: ReactNode }) => <>{children}</>;

interface HeaderProps {
  icon?: React.ElementType;
  children?: ReactNode;
}

const ProgramToolkit = ({ children, icon: Icon }: HeaderProps) => {
  let titleContent: ReactNode = null;
  let otherChildren: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === Title) {
      titleContent = (child as React.ReactElement<any>).props.children;
    } else {
      otherChildren.push(child);
    }
  });

  return (
    <header className="flex flex-col w-full p-2">
      <div className="heading_tools flex justify-between items-center gap-4 mb-2">
        <div className="flex gap-2 items-center">
          <Menu className="w-5 h-5 text-gray-800" />
          <p className="font-bold text-gray-600">{titleContent}</p>
        </div>

        {Icon && <Icon className="w-5 h-5 text-gray-800" />}

        <div className="flex gap-2 items-center">
          <Link href="" className="font-bold text-violet-800">
            See all
          </Link>
          <EllipsisVertical className="w-5 h-5 text-violet-950" />
        </div>
      </div>

      <div>{otherChildren}</div>
    </header>
  );
};

export default ProgramToolkit;
