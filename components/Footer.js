import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Grid container - Adjusted gap for better responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* First column - Logo and social */}
            <div className="flex flex-col">
              <div className="mb-6">
                <Link href="/" className="inline-block ">
                  <div className="relative h-12 w-40 md:h-14 md:w-48 lg:h-18 lg:w-56 transition-opacity duration-200 hover:opacity-90">
                    <Image
                      src="/ASBlogo.png" // Change this to your logo path public\ASBlogo.png
                      alt="ASB Logistics Logo"
                      fill
                      sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                      className="object-cover object-left"
                      priority={false}
                    />
                  </div>
                </Link>
                <p className="text-xs text-gray-400 mt-1">B.V.</p>
              </div>
              <p className="text-gray-400 mb-6 text-sm lg:text-base">
                Professional logistics solutions for businesses across Europe. 
                Fast, reliable, and efficient services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Services column */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/storage" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Storage Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/inventory" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link href="/packaging" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Packaging & Branding
                  </Link>
                </li>
                <li>
                  <Link href="/distribution" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Distribution
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Company column */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal column */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-sm lg:text-base">&copy; {new Date().getFullYear()} ASB Logistics B.V. All rights reserved.</p>
            <p className="mt-2 text-xs lg:text-sm">KVK: 12345678 | VAT: NL123456789B01</p>
          </div>
        </div>
      </div>
    </footer>
  )
}