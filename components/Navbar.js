'use client'

import { Menu, X, Package, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'What we offer', href: '/offer' },
    { name: 'Advantages', href: '/advantages' },
    { name: 'Storage Barendrecht', href: '/storage' },
    { name: 'Contact', href: '/contact' },
    { name: 'Request a quote', href: '/quote' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Orange (#F7A233) */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-[#F7A233] p-2 rounded group-hover:bg-[#e69122] transition-colors duration-200">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[rgb(43,95,142)]">ASB LOGISTICS</h1>
              <p className="text-xs text-gray-600">B.V.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 relative group ${
                    active 
                      ? 'text-[#F7A233]' 
                      : 'text-[rgb(43,95,142)] hover:text-[#F7A233]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    active 
                      ? 'w-full bg-[#F7A233]' 
                      : 'w-0 bg-[#F7A233] group-hover:w-full'
                  }`}></span>
                </Link>
              )
            })}
           
            <Link
              href="/login"
              className="ml-4 bg-[#F7A233] text-white px-6 py-2 rounded-md hover:bg-[#e69122] transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[rgb(43,95,142)]" />
            ) : (
              <Menu className="h-6 w-6 text-[rgb(43,95,142)]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 font-medium transition-colors duration-200 ${
                    active 
                      ? 'text-[#F7A233] border-l-4 border-[#F7A233] pl-3' 
                      : 'text-[rgb(43,95,142)] hover:text-[#F7A233] pl-4'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="flex items-center justify-between py-3 px-4">
              <span className="text-[rgb(43,95,142)] font-medium">NL</span>
              <Link
                href="/login"
                className="bg-[#F7A233] text-white px-6 py-2 rounded-md hover:bg-[#e69122] transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}