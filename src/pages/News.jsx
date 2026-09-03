import React from 'react'
import SectionTag from '../components/SectionTag'
import { CheckCircle2 } from 'lucide-react'

export default function News() {
  const topics = [
    'Remote engineering support for European machine builders',
    'Scaling Dutch engineering teams through offshore technical capacity',
    'Mechanical design support for industrial automation projects',
    'Tekla modeling and structural engineering developments',
    'Engineering recruitment challenges in Europe',
    'Building long-term remote engineering teams',
    'India’s growing role in global engineering services',
    'Project collaboration between European and Indian engineering teams',
  ]

  const updates = [
    'Engineering project highlights',
    'New technical capabilities',
    'Recruitment and onboarding updates',
    'Industry trends',
    'Partnership announcements',
    'Technical success stories',
    'Process improvements and workflow innovations',
  ]

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden min-h-[360px] lg:min-h-[420px] flex items-center border-b border-gray-100">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&h=600&fit=crop&auto=format"
            alt="News and Updates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/40" />
          <div className="absolute inset-0 bg-white/40 lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center py-16 lg:py-20">
            <div className="lg:w-[50%] animate-fade-in-up">
              <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
                NEWS
              </p>
              <h1 className="text-4xl lg:text-[54px] font-serif font-bold text-[#0E1525] leading-tight mb-6">
                Latest<br />Developments
              </h1>
              <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mb-6" />
              <p className="text-[13px] lg:text-[14px] font-medium text-gray-700 leading-relaxed max-w-[440px]">
                Stay updated with the latest from Impaqwerk, including engineering projects, technical insights, and international growth initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <SectionTag>Topics</SectionTag>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Recent Topics
          </h2>
          <div className="w-12 h-1 bg-[#E32B2B] mb-5" />


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {topics.map((topic, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#E32B2B] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{topic}</span>
              </div>
            ))}
          </div>

          <SectionTag>Company Updates</SectionTag>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Latest from Impaqwerk
          </h2>
          <div className="w-12 h-1 bg-[#E32B2B] mb-5" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {updates.map((update, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#E32B2B] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{update}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

