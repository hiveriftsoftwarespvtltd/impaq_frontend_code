import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import LogoImage from '../assets/Impaq_logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/process', label: 'Process' },
  { to: '/news', label: 'News' },
  { to: '/partners', label: 'Partners' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0E1525] border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={LogoImage} alt="Impaqwerk" className="h-12 lg:h-[52px] w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-4 text-[13px] font-semibold transition-all duration-200 border-b-[3px] ${
                    isActive
                      ? 'text-red-600 border-red-600'
                      : 'text-white border-transparent hover:text-red-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 hover:scale-105 group"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-white hover:text-red-500 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-gray-800 py-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 mx-4 flex items-center justify-center gap-2 bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200"
              >
                Let's Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
