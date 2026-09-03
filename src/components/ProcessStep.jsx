import React from 'react'

export default function ProcessStep({ icon: Icon, step, title, description, isLast = false }) {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-9 left-[calc(50%+36px)] w-[calc(100%-72px)] border-t-[1.5px] border-dotted border-[#E32B2B]/40 z-0" />
      )}
      {/* Circle icon */}
      <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-[#0E1525] flex items-center justify-center mb-4 shadow-[0_4px_14px_rgba(14,21,37,0.2)] hover:scale-105 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" strokeWidth={1.2} />
        {/* Step number badge */}
        <span className="absolute bottom-0 right-0 w-[22px] h-[22px] bg-[#E32B2B] text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white/90">
          {step}
        </span>
      </div>
      <h3 className="text-[14.5px] font-bold text-[#0E1525] mb-2">{title}</h3>
      <p className="text-[12px] text-gray-600 font-medium leading-[1.6] max-w-[150px]">{description}</p>
    </div>
  )
}
