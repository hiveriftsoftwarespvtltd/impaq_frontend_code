import React from 'react'
import { Link } from 'react-router-dom'
import {
  Users, FileText, Settings, BadgeCheck, TrendingUp
} from 'lucide-react'
import SectionTag from '../components/SectionTag'
import SectionHeading from '../components/SectionHeading'
import ProcessStep from '../components/ProcessStep'

const steps = [
  { icon: Users, title: 'Understanding Your Requirements', description: 'We analyse your technical needs, project structure, software environment, and required engineering profile.' },
  { icon: FileText, title: 'Talent Selection', description: 'Through a detailed selection process, we identify engineers matching your technical and operational expectations.' },
  { icon: BadgeCheck, title: 'Candidate Shortlisting', description: 'We present qualified candidates for direct evaluation and interview.' },
  { icon: Settings, title: 'Team Integration', description: 'Once approved, the engineer becomes a dedicated extension of your engineering department.' },
]

export default function Process() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden min-h-[360px] lg:min-h-[420px] flex items-center border-b border-gray-100">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] z-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&h=600&fit=crop&auto=format"
            alt="Our Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/40" />
          <div className="absolute inset-0 bg-white/40 lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center py-16 lg:py-20">
            <div className="lg:w-[50%] animate-fade-in-up">
              <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
                HOW IT WORKS
              </p>
              <h1 className="text-4xl lg:text-[54px] font-serif font-bold text-[#0E1525] leading-tight mb-6">
                Simple Process.<br/>Strong Results.
              </h1>
              <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mb-6" />
              <p className="text-[13px] lg:text-[14px] font-medium text-gray-700 leading-relaxed max-w-[440px]">
                Our streamlined 4-step working method ensures that you get the right engineer, seamlessly integrated into your team, delivering results from day one.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <ProcessStep key={i} {...step} step={i + 1} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
