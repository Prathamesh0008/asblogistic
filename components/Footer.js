import Link from 'next/link'
import { Package, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="max-w-6xl mx-auto">
          {/* Grid container - with reasonable gap */}
          <div className="grid md:grid-cols-4 gap-40">
            {/* First column - Logo and social */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#F7A233] p-2 rounded flex-shrink-0">
                  <Package className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-md font-bold leading-tight">ASB LOGISTICS</h2>
                  <p className="text-xs text-gray-400">B.V.</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Professional logistics solutions for businesses across Europe. 
                Fast, reliable, and efficient services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Services column */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/storage" className="text-gray-400 hover:text-white">
                    Storage Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/inventory" className="text-gray-400 hover:text-white">
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link href="/packaging" className="text-gray-400 hover:text-white">
                    Packaging & Branding
                  </Link>
                </li>
                <li>
                  <Link href="/distribution" className="text-gray-400 hover:text-white">
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
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
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
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-gray-400 hover:text-white">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ASB Logistics B.V. All rights reserved.</p>
            <p className="mt-2 text-sm">KVK: 12345678 | VAT: NL123456789B01</p>
          </div>
        </div>
      </div>
    </footer>
  )
}