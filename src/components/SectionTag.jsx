import React from 'react'

export default function SectionTag({ children }) {
  return (
    <p className="text-[11px] !font-semibold tracking-[0.22em] text-red-600 uppercase mb-3 antialiased">
      {children}
    </p>
  )
}
