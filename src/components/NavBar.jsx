import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex justify-between items-center w-5/6 mx-auto p-4'>
         <div>
         <Link className='text-xl' to='/'>navlogo</Link>
         </div>
         <div className='text-lg space-x-4'>
            
            <NavLink to='/' className={({ isActive }) => 
            (isActive ? 'text-blue-500' : 'default')}>Home</NavLink>
            <NavLink to='/service' className={({ isActive }) => 
            (isActive ? 'text-blue-500' : 'default')}>Service</NavLink>
            <NavLink to='/about' className={({ isActive }) => 
            (isActive ? 'text-blue-500' : 'default')}>About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => 
            (isActive ? 'text-blue-500' : 'default')}>Contact</NavLink>
           
         </div>
        </div>
    );
};

export default NavBar;