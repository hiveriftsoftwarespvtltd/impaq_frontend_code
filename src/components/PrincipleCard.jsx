import React from 'react'

export default function PrincipleCard({ icon: Icon, title, description }) {
  return (
    <div className="group flex flex-col items-center text-center p-6 hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors duration-300">
        <Icon className="w-7 h-7 text-red-600 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
      </div>
      <h3 className="text-sm font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}
