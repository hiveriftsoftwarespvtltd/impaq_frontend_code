import React from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTABanner({ title, subtitle, buttonLabel = "Let's Discuss Your Requirements" }) {
  return (
    <section className="py-6 lg:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-[#0E1525] rounded-2xl py-5 px-6 lg:py-6 lg:px-10 relative overflow-hidden shadow-[0_8px_30px_rgba(14,21,37,0.15)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left content */}
            <div className="lg:max-w-[55%] flex gap-4 items-center">
              <div className="hidden lg:block w-1 h-[50px] bg-[#E32B2B] shrink-0 rounded-full" />
              <div>
                <h2 className="text-[22px] lg:text-[26px] font-serif font-bold text-white mb-1.5 leading-snug">{title}</h2>
                {subtitle && (
                  <p className="text-[12px] lg:text-[13px] text-gray-300 font-medium leading-[1.6] mb-3 max-w-[420px]">{subtitle}</p>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#E32B2B] hover:bg-red-700 text-white text-[13px] font-bold px-6 py-3 rounded transition-all duration-200 hover:scale-105 group shadow-md"
                >
                  {buttonLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Right: World map graphic */}
          <div className="lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 relative w-full lg:w-[380px] flex items-center justify-center pointer-events-none mt-6 lg:mt-0">
            {/* Simple world map SVG representation */}
            <div className="relative w-full max-w-sm">
              <svg viewBox="0 0 400 220" className="w-full opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified world map dots */}
                <ellipse cx="200" cy="110" rx="190" ry="100" stroke="#4B5563" strokeWidth="1" fill="none"/>
                {/* Europe blob */}
                <path d="M170 60 Q190 50 210 65 Q225 75 220 90 Q210 100 190 95 Q170 90 170 60Z" fill="#374151" opacity="0.6"/>
                {/* Asia blob */}
                <path d="M230 55 Q280 45 310 70 Q330 85 315 100 Q290 110 260 100 Q235 90 230 55Z" fill="#374151" opacity="0.6"/>
                {/* India */}
                <path d="M270 90 Q285 85 295 100 Q290 120 275 125 Q265 115 270 90Z" fill="#E32B2B" opacity="0.8"/>
                {/* Americas */}
                <path d="M80 65 Q110 55 120 80 Q115 100 100 110 Q80 115 70 95 Q70 75 80 65Z" fill="#374151" opacity="0.6"/>
                {/* Red dashed arc from India to Europe */}
                <path d="M280 108 Q250 30 195 75" stroke="#E32B2B" strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
              </svg>
              {/* Europe pin */}
              <div className="absolute top-[28%] left-[47%] flex flex-col items-center">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-white text-xs font-semibold">Europe</span>
                </div>
              </div>
              {/* India pin */}
              <div className="absolute top-[60%] left-[68%] flex flex-col items-center">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-white text-xs font-semibold">India (Pune)</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
