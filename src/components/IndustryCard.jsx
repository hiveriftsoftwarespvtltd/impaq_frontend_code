import React from 'react'

export default function IndustryCard({ image, icon: Icon, title, description }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative h-36 lg:h-40 shrink-0">
        <div className="w-full h-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        {/* Icon circle centered at bottom edge */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#0E1525] rounded-full flex items-center justify-center border-2 border-white z-10">
          <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
        </div>
      </div>
      <div className="pt-8 pb-6 px-5 text-center flex flex-col flex-1">
        <h3 className="text-[16px] lg:text-[17px] font-serif font-bold text-[#0E1525] mb-2.5 leading-snug">{title}</h3>
        {description && (
          <p className="text-[12px] text-gray-600 leading-[1.6] px-1">{description}</p>
        )}
      </div>
    </div>
  )
}
