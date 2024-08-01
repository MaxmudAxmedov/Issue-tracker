'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaCode } from "react-icons/fa";
import classNames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issue', href: '/issue' },
    { label: 'Account', href: '/account' },
  ];

  return (
    <div className='container'>
      <nav className='flex space-x-6 border-b mb-5 py-3 items-center'>
        <Link href='/'><FaCode size={36} /></Link>
        <ul className='flex space-x-6'>
          {
            links?.map((link, index) => 
              <Link key={index} className={classNames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
              })} href={link.href}>{link.label}</Link>)
          }
        </ul>
      </nav>
    </div>
  )
}

export default NavBar