import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className='flex space-x-3'>
            <div><Link href='/'>Home</Link></div>
            <div><Link href='/dashboard'>Dashboard</Link></div>
            <div><Link href='/blog'>Blog</Link></div>
        </nav>
    );
};

export default Navbar;