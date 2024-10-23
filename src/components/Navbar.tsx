'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { FaConnectdevelop, FaGamepad, FaHandsHelping, FaLaptop } from 'react-icons/fa'

interface menuItemsProps {
  icon: React.ReactNode,
  title: string,
  link: string
}

const menuItems: menuItemsProps[] = [
  {
    icon: <FaLaptop size={20}/>,
    title: 'Simulation',
    link: '/simulation'
  },
  {
    icon: <FaGamepad size={20}/>,
    title: 'Game',
    link: '/game'
  },
  {
    icon: <FaHandsHelping size={20}/>,
    title: 'Contact Us',
    link: '/contact'
  }
]

const Navbar = () => {
  // const 
  
  const [navbarOpen, setNavbarOpen] = useState(false) 
  return (
    <section className='container bg-gray-900 z-10 overflow-hidden py-5 border-primary border-b-2'>
      <div className="flex flex-wrap group items-center justify-between mx-auto px-4">
        <Link href={'/'} className="text-3xl text-white font-semibold group-hover:text-primary/30">
          Stake<span className="text-primary group-hover:text-primary/30">.</span>
        </Link>
        <div className="mobile-menu mt-8 block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border-2 rounded border-primary text-primary hover:text-white hover:border-white"
            >
              {/* <Bars3Icon className="h-5 w-5" /> */}
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-primary text-primary hover:text-white hover:border-white"
            >
              {/* <XMarkIcon className="h-5 w-5" /> */}
            </button>
          )}
        </div>
        <div className='flex gap-10'>
        {menuItems.map((menuItem: menuItemsProps) => (
          <Link href={menuItem.link} key={menuItem.title} >
            <Button className='gap-2'>{menuItem.icon}{menuItem.title}</Button>
          </Link> 
        ))}
      </div>
      </div>
    </section>
  )
}

export default Navbar