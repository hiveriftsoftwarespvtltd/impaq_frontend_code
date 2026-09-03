import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, description, linkLabel = 'Learn More', to = '/services' }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl p-6 lg:p-8 flex flex-col items-center text-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
      <div className="mb-5 flex justify-center items-center">
        <Icon className="w-[50px] h-[50px] text-[#E32B2B]" strokeWidth={1} />
      </div>
      <h3 className="text-[17px] lg:text-[18px] font-serif font-bold text-[#0E1525] mb-3 leading-snug">{title}</h3>
      <p className="text-[12px] text-gray-600 leading-[1.6] flex-1 mb-6 px-1">{description}</p>
      <Link
        to={to}
        className="flex items-center gap-1.5 text-[13px] font-bold text-[#E32B2B] hover:gap-2.5 transition-all duration-200 group/link"
      >
        {linkLabel}
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  )
}
