import Link from 'next/link'
import React from 'react'
import { FaCode } from "react-icons/fa";
const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issue', href: 'issue' },
  ]
  return (
    <div className='container'>
      <nav className='flex space-x-6 border-b mb-5 py-3 items-center'>
        <Link href='/'><FaCode size={36} /></Link>
        <ul className='flex space-x-6'>
          {
            links?.map((link, index) => {
              return <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default NavBar