import {ReactNode} from 'react';
import clsx from 'clsx';

type CardSize = 'small' | 'medium' | 'large';

interface CardProps {
    size?: CardSize;
    className?: string;
    children: ReactNode;
   
}

const sizeStyles: Record<CardSize, string> = {
    small: 'w-60 h-40',
    medium: 'w-80 h-56',
    large: 'w-96 h-72',
};

const Card = ({size = 'medium', className, children}: CardProps) => {
  return (
    <div className={clsx(
        'bg-white rounded-2xl shadow-md p-4 transition-all duration-300', sizeStyles[size], className
    )}>
      {children}
    </div>
  )
}

export default Card 
