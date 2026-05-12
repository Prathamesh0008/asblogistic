"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "What we offer", href: "/offer" },
    { name: "Advantages", href: "/advantages" },
    { name: "Storage Barendrecht", href: "/storage" },
    { name: "Contact", href: "/contact" },
    {
      name: "Request a quote",
      href: "/quote",
      className:
        "inline-flex items-center justify-center bg-[#F7A233] text-white px-6 py-2 rounded-md hover:bg-[#e69122] transition-colors duration-200 font-medium shadow-md hover:shadow-lg",
    },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-40 md:h-14 md:w-48 lg:h-16 lg:w-56 transition-all duration-200 group-hover:opacity-90">
              <Image
                src="/ASBlogo.png"
                alt="ASB Logistics Logo"
                fill
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                className="object-cover object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href);

              if (item.className) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={item.className}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 relative group ${
                    active
                      ? "text-[#F7A233]"
                      : "text-[rgb(43,95,142)] hover:text-[#F7A233]"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      active
                        ? "w-full bg-[#F7A233]"
                        : "w-0 bg-[#F7A233] group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
              const active = isActive(item.href);

              if (item.className) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-center bg-[#F7A233] text-white px-6 py-3 rounded-md hover:bg-[#e69122] transition-colors duration-200 font-medium shadow-md mx-4 mt-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 font-medium transition-colors duration-200 ${
                    active
                      ? "text-[#F7A233] border-l-4 border-[#F7A233] pl-3"
                      : "text-[rgb(43,95,142)] hover:text-[#F7A233] pl-4"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}