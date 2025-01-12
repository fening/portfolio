'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, Briefcase, GraduationCap, Code, Mail, Menu } from 'lucide-react'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: '#about', icon: User, label: 'About' },
    { href: '#experience', icon: Briefcase, label: 'Experience' },
    { href: '#education', icon: GraduationCap, label: 'Education' },
    { href: '#projects', icon: Code, label: 'Projects' },
    { href: '#contact', icon: Mail, label: 'Contact' },
  ]

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <nav className="h-full flex flex-col py-6">
          <div className="px-6 mb-8">
            <h2 className="text-2xl font-bold">Fening Okai</h2>
            <p className="text-sm text-gray-600">IT Professional</p>
          </div>
          <ul className="space-y-2 flex-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

