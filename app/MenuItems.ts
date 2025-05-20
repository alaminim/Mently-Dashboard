import { 
    FaHome, 
    FaBook, 
    FaRunning, 
    FaUsers, 
    FaComments, 
    FaMoneyBill, 
    FaGift, 
    FaChartLine, 
    FaCog, 
    FaSignOutAlt 
  } from 'react-icons/fa';
  

export const MenuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: FaHome },
    { name: 'Programs', href: '/programs', icon: FaBook },
    { name: 'Activities', href: '/activities', icon: FaRunning },
    { name: 'Users', href: '/users', icon: FaUsers },
    { name: 'Forum', href: '/forum', icon: FaComments },
    { name: 'Finances', href: '/finances', icon: FaMoneyBill },
    { name: 'Rewards', href: '/rewards', icon: FaGift },
    { name: 'Analytics', href: '/analytics', icon: FaChartLine },
    { name: 'Settings', href: '/settings', icon: FaCog },
    { name: 'Logout', href: '/logout', icon: FaSignOutAlt },
  ];