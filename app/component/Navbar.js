import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className='flex space-x-3'>
            <div><Link href='/'>Home</Link></div>
            
        </nav>
    );
};

export default Navbar;