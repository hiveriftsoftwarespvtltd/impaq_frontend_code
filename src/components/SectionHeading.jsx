import React from 'react'

export default function SectionHeading({ title, subtitle, centered = false, underline = false }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
        {title}
      </h2>
      {underline && (
        <div className={`w-12 h-1 bg-red-600 mb-4 ${centered ? 'mx-auto' : ''}`} />
      )}
      {subtitle && (
        <p className={`text-sm lg:text-base text-gray-500 leading-relaxed ${centered ? 'max-w-xl mx-auto' : 'max-w-lg'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
