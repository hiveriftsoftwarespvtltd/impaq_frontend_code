import React from 'react'
import SectionTag from '../components/SectionTag'
import { CheckCircle2, Factory, Building2, Zap, Briefcase, Globe2, Users, ShieldCheck, TrendingUp, MapPin } from 'lucide-react'

export default function Partners() {
  const worksWith = [
    'European engineering companies', 'Industrial automation firms',
    'Machine builders', 'Structural engineering companies',
    'Manufacturing organizations', 'Technical consultancy firms'
  ]

  const reasons = [
    'Dedicated engineering professionals', 'Long-term collaboration mindset',
    'Fast team scaling capability', 'Strong understanding of European engineering standards',
    'Significant cost efficiency', 'Flexible cooperation models',
    'Reliable communication structure', 'Technical and cultural alignment'
  ]

  const markets = [
    'The Netherlands', 'Belgium', 'Germany', 'Denmark', 'Other European industrial markets'
  ]

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden min-h-[360px] lg:min-h-[420px] flex items-center border-b border-gray-100">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop&auto=format"
            alt="Partnerships"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/40" />
          <div className="absolute inset-0 bg-white/40 lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center py-16 lg:py-20">
            <div className="lg:w-[50%] animate-fade-in-up">
              <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
                PARTNERS
              </p>
              <h1 className="text-4xl lg:text-[54px] font-serif font-bold text-[#0E1525] leading-tight mb-6">
                Strong Technical<br />Partnerships
              </h1>
              <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mb-6" />
              <p className="text-[13px] lg:text-[14px] font-medium text-gray-700 leading-relaxed max-w-[440px]">
                We believe successful engineering projects are built through strong long-term partnerships with industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <SectionTag>Collaboration</SectionTag>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Building Strong Technical Partnerships
            </h2>
            <div className="w-12 h-1 bg-[#E32B2B] mx-auto mb-5" />
            <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Impaqwerk Pvt. Ltd. believes successful engineering projects are built through strong long-term partnerships. Our approach focuses on becoming a reliable extension of our partners’ engineering departments.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">We Work Closely With</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {[
                { label: 'European engineering companies', icon: Globe2 },
                { label: 'Industrial automation firms', icon: Zap },
                { label: 'Machine builders', icon: Factory },
                { label: 'Structural engineering companies', icon: Building2 },
                { label: 'Manufacturing organizations', icon: Briefcase },
                { label: 'Technical consultancy firms', icon: Users }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group">
                  <div className="w-12 h-12 bg-red-50 text-[#E32B2B] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#E32B2B] group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Companies Partner With Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {reasons.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-[#E32B2B]/30 transition-colors flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#E32B2B] mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">International Collaboration</h3>
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gray-50 hidden lg:block" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-2/3">
                  <p className="text-sm text-gray-600 mb-6">Our primary focus is supporting companies in:</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {markets.map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#E32B2B]" />
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 italic border-l-2 border-[#E32B2B] pl-4">
                    From our engineering base in Pune, India, we provide scalable technical support aligned with European business expectations and project requirements.
                  </p>
                </div>
                <div className="lg:w-1/3 flex justify-center">
                  <Globe2 className="w-32 h-32 text-gray-200" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

