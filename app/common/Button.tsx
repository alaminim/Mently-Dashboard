import clsx from 'clsx';
import React, { ReactNode } from 'react'


type ButtonSize = "small" | "medium" | "large"
type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    size?:ButtonSize;
    disabled?: boolean;
    children: ReactNode;
    className: string;
    rightIcon?: ReactNode;
    variant?:ButtonVariant; 
}
const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-violet-800 text-white hover:bg-violet-900",
    secondary: "bg-transparent border border-violet-800 text-violet-800 hover:bg-violet-500",
    tertiary: "border border-primary border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
  };

const Btnsizes: Record<ButtonSize, string> = {
    small: "p-1 text-sm",
    medium: "p-2 text-base",
    large: "p-3 text-lg",
}
const Button = ({
    type="button",
    variant ='primary',
    size= "medium",
    disabled= false,
    rightIcon,
    children,
    className =""
    
}: ButtonProps) => {
    const isDisabled = disabled;
  return (
    <button
    type={type}
    disabled = {isDisabled}
    className={clsx(
       "inline-flex items-center rounded justify-center whitespace-nowrap font-medium transition duration-300 ease-in-out",
        className,
        variantClasses[variant],
        Btnsizes[size]
    )}
    
    >
  {children}    
      {rightIcon && <span className='ml-2'>{rightIcon}</span> }
    </button>
  )
}

export default Button
