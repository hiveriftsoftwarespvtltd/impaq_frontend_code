import React from 'react'

export default function StatCard({ icon: Icon, value, label, dark = false }) {
  return (
    <div className={`flex flex-col items-center justify-center p-6 lg:p-8 text-center ${dark ? 'text-white' : 'text-gray-900'}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${dark ? 'bg-white/10' : 'bg-red-50'}`}>
        <Icon className={`w-6 h-6 ${dark ? 'text-white' : 'text-red-600'}`} strokeWidth={1.5} />
      </div>
      <div className={`text-3xl lg:text-4xl font-bold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>{value}</div>
      <div className={`text-xs font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
    </div>
  )
}
