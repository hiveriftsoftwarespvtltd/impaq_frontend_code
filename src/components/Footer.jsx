import React from 'react'
import { Link } from 'react-router-dom'
import { Link2, Share2, Globe, Rss, MapPin, Phone, Mail } from 'lucide-react'
import LogoImage from '../assets/Impaq_logo.png'

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/process', label: 'Process' },
  { to: '/news', label: 'News' },
  { to: '/partners', label: 'Partners' },
  { to: '/contact', label: 'Contact Us' },
]

const services = [
  'Mechanical Design Engineering',
  'Industrial Automation Support',
  'Structural Engineering & Tekla',
  'Manufacturing Support',
  'Technical Documentation',
  'Project Based Support',
]

export default function Footer() {
  return (
    <footer className="bg-[#0E1525] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img src={LogoImage} alt="Impaqwerk" className="h-[46px] w-auto object-contain" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              We bridge the gap between European businesses and world-class remote engineering talent.
            </p>
            <div className="flex items-center gap-3">
              {[Link2, Share2, Globe, Rss].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-red-600 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 tracking-wide">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Office no - 03A, 4th Floor,<br />
                  A Building, City Vista Down town,<br />
                  Fountain Road, Kharadi,<br />
                  Pune, Maharashtra, 411014, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:+918446999276" className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                  +91 8446999276
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="mailto:Dipak@impactas.nl" className="text-sm text-gray-400 hover:text-red-400 transition-colors">
                  Dipak@impactas.nl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2024 Impaqwerk Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
