import React from 'react'
import { Link } from 'react-router-dom'
import {
  Zap, Settings, Building2, Factory, Cog,
  FileText, HardHat, Users, BadgeCheck, TrendingUp,
  Shield, Handshake, ArrowRight, Globe, Calendar
} from 'lucide-react'
import SectionTag from '../components/SectionTag'
import SectionHeading from '../components/SectionHeading'
import IndustryCard from '../components/IndustryCard'
import PrincipleCard from '../components/PrincipleCard'
import industriesVideo from '../assets/all_banner_video/Industries.mov'

const industries = [
  {
    icon: Zap,
    title: 'Industrial Automation',
    description: 'Supporting automation companies with electrical design, control systems, PLC, HMI & SCADA engineering.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=220&fit=crop&auto=format',
  },
  {
    icon: Settings,
    title: 'Machine Building',
    description: 'Delivering mechanical design, detailing, and documentation support for custom machine and equipment manufacturers.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=220&fit=crop&auto=format',
  },
  {
    icon: Building2,
    title: 'Structural Engineering',
    description: 'Providing Tekla modeling, structural detailing, and connection design for steel and concrete structures.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=220&fit=crop&auto=format',
  },
  {
    icon: Factory,
    title: 'Manufacturing Systems',
    description: 'Helping optimize manufacturing processes and systems for improved efficiency and productivity.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=220&fit=crop&auto=format',
  },
  {
    icon: Cog,
    title: 'Mechanical Design',
    description: 'Offering 3D modeling, machine design, assembly, and product development using leading CAD tools.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&h=220&fit=crop&auto=format',
  },
  {
    icon: FileText,
    title: 'Technical Documentation',
    description: 'Creating user manuals, assembly instructions, datasheets, and maintenance documentation.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=220&fit=crop&auto=format',
  },
  {
    icon: HardHat,
    title: 'Steel Construction Projects',
    description: 'Supporting detailing, fabrication drawings, and project coordination for steel construction.',
    image: 'https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?w=400&h=220&fit=crop&auto=format',
  },
  {
    icon: Users,
    title: 'Engineering Consultancy Firms',
    description: 'Providing extended engineering teams and specialist support for consultancy projects.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=220&fit=crop&auto=format',
  },
]

const whyUs = [
  { icon: Users, title: 'Skilled Engineers Across Disciplines', description: 'Access to a wide pool of domain experts.' },
  { icon: Shield, title: 'Industry Standards & Compliance', description: 'We follow international engineering standards.' },
  { icon: TrendingUp, title: 'Faster Turnaround Time', description: 'Streamlined processes for on-time delivery.' },
  { icon: Settings, title: 'Scalable Engagement', description: 'Scale your team up or down as needed.' },
  { icon: BadgeCheck, title: 'Cost Efficiency Without Compromise', description: 'High-quality output at optimized cost.' },
  { icon: Handshake, title: 'Long-Term Partnerships', description: 'We grow together with your success.' },
]

const stats = [
  { icon: Users, value: '50+', label: 'Skilled Engineers' },
  { icon: Calendar, value: '2024', label: 'Founded In' },
  { icon: Shield, value: '100%', label: 'Dedicated to Clients' },
  { icon: Handshake, value: 'Long Term', label: 'Partnership Focus' },
]

const countries = [
  { flag: 'https://flagcdn.com/w40/nl.png', name: 'Netherlands' },
  { flag: 'https://flagcdn.com/w40/be.png', name: 'Belgium' },
  { flag: 'https://flagcdn.com/w40/de.png', name: 'Germany' },
  { flag: 'https://flagcdn.com/w40/dk.png', name: 'Denmark' },
  { isIcon: true, icon: Globe, name: '& More' },
]

export default function Industries() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-[#0E1525] overflow-hidden min-h-[460px] lg:min-h-[520px]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <video
            src={industriesVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col min-h-[460px] lg:min-h-[520px] justify-center items-center text-center">
            <div className="w-full lg:w-[80%] py-16 lg:py-20 animate-fade-in-up flex flex-col items-center">
              <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-5">
                INDUSTRIES
              </p>
              <h1 className="text-[34px] lg:text-[44px] font-serif font-bold text-white leading-[1.15] mb-6">
                Engineering Solutions<br />That Power Industries<br />Worldwide
              </h1>
              <div className="w-12 h-1 bg-[#E32B2B] mx-auto mb-6" />
              <p className="text-sm lg:text-[15px] text-gray-300 leading-relaxed max-w-[600px] mx-auto mb-10">
                Impaqwerk provides specialized engineering support across a wide range of technical sectors, delivering reliable capacity that meets the rigorous demands of European industry standards.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {[
                  { icon: Users, label: 'Industry-Specific\nExpertise' },
                  { icon: Shield, label: 'Quality & Standards\nAssured' },
                  { icon: TrendingUp, label: 'Scalable & Flexible\nEngagement' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon className="w-[22px] h-[22px] text-[#E32B2B]" strokeWidth={1.2} />
                    <span className="text-[11px] font-semibold text-white/90 leading-[1.3] whitespace-pre-line">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ── */}
      <section className="pt-16 pb-8 lg:pt-20 lg:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
              INDUSTRIES WE SUPPORT
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-serif font-bold text-[#0E1525] leading-tight mb-5">
              We Work With Industries That Build The Future
            </h2>
            <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {industries.map((ind, i) => (
              <IndustryCard key={i} {...ind} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL COLLABORATION ── */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-[#0E1525] rounded-2xl py-6 px-6 lg:py-6 lg:px-10 shadow-[0_8px_30px_rgba(14,21,37,0.15)] relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center relative z-10">
              {/* Left map area */}
              <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 relative w-full lg:w-[420px] flex justify-center pointer-events-none mt-6 lg:mt-0">
                <svg viewBox="0 0 400 220" className="w-full max-w-sm lg:max-w-md opacity-25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="200" cy="110" rx="190" ry="100" stroke="white" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
                  <path d="M170 60 Q190 50 210 65 Q225 75 220 90 Q210 100 190 95 Q170 90 170 60Z" fill="white" opacity="0.4"/>
                  <path d="M230 55 Q280 45 310 70 Q330 85 315 100 Q290 110 260 100 Q235 90 230 55Z" fill="white" opacity="0.4"/>
                  <path d="M270 90 Q285 85 295 100 Q290 120 275 125 Q265 115 270 90Z" fill="#E32B2B" opacity="0.9"/>
                  <path d="M80 65 Q110 55 120 80 Q115 100 100 110 Q80 115 70 95 Q70 75 80 65Z" fill="white" opacity="0.4"/>
                  <path d="M280 108 Q250 30 195 75" stroke="#E32B2B" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
                  {/* Map Pins */}
                  <g transform="translate(195, 75)">
                    <circle cx="0" cy="0" r="14" fill="#E32B2B" opacity="0.2" />
                    <circle cx="0" cy="0" r="5" fill="#E32B2B" />
                    <circle cx="0" cy="0" r="2" fill="white" />
                  </g>
                  <g transform="translate(280, 108)">
                    <circle cx="0" cy="0" r="14" fill="#E32B2B" opacity="0.2" />
                    <circle cx="0" cy="0" r="5" fill="#E32B2B" />
                    <circle cx="0" cy="0" r="2" fill="white" />
                  </g>
                </svg>
              </div>
              {/* Right text */}
              <div className="lg:w-[50%] lg:ml-auto z-10">
                <h2 className="text-[24px] lg:text-[28px] font-serif font-bold text-white mb-2 leading-snug">Global Collaboration. Local Understanding.</h2>
                <p className="text-[12.5px] lg:text-[13px] text-gray-300 font-medium leading-[1.7] mb-6 max-w-[480px]">
                  From our engineering hub in Pune, India, we empower industries across Europe with reliable, high-quality engineering support aligned with their standards and goals.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  {countries.map((country) => (
                    <div key={country.name} className="flex items-center gap-2">
                      {country.isIcon ? (
                        <country.icon className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
                      ) : (
                        <img src={country.flag} alt={country.name} className="w-[22px] h-[22px] rounded-full object-cover shadow-sm border border-white/20" />
                      )}
                      <span className="text-[12px] lg:text-[13px] text-white/90 font-medium">{country.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INDUSTRIES CHOOSE IMPAQWERK ── */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-5">
              WHY INDUSTRIES CHOOSE IMPAQWERK
            </p>
            <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300 lg:[&:not(:last-child)]:after:content-[''] lg:[&:not(:last-child)]:after:absolute lg:[&:not(:last-child)]:after:right-[-16px] lg:[&:not(:last-child)]:after:top-1/2 lg:[&:not(:last-child)]:after:-translate-y-1/2 lg:[&:not(:last-child)]:after:w-[1px] lg:[&:not(:last-child)]:after:h-[60%] lg:[&:not(:last-child)]:after:bg-gray-200">
                <div className="w-16 h-16 rounded-full bg-red-50 group-hover:bg-red-100 flex items-center justify-center mb-5 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-[#E32B2B] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.2} />
                </div>
                <h3 className="text-[13px] lg:text-[14px] font-bold text-[#0E1525] mb-2 leading-snug px-2">{item.title}</h3>
                <p className="text-[11.5px] lg:text-[12px] text-gray-500 leading-[1.6] max-w-[140px] px-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA BAR ── */}
      <section className="pb-8 pt-8 lg:pb-10 lg:pt-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-[#0E1525] rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(14,21,37,0.15)] flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left side */}
            <div className="lg:max-w-[45%] flex gap-4">
              <div className="hidden lg:block w-1 h-[60px] bg-[#E32B2B] mt-1 shrink-0 rounded-full" />
              <div>
                <h2 className="text-[20px] lg:text-[24px] font-serif font-bold text-white mb-2 leading-snug">Looking to Strengthen Your Engineering Capability?</h2>
                <p className="text-[12px] lg:text-[13px] text-gray-300 font-medium leading-[1.6] mb-5">Let's build the right remote engineering team for your industry.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#E32B2B] hover:bg-red-700 text-white text-[13px] font-bold px-6 py-3 rounded transition-all duration-200 hover:scale-105 shadow-md group"
                >
                  Let's Discuss Your Requirements
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            {/* Right side stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 w-full lg:w-auto">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon className="w-8 h-8 text-[#E32B2B] mb-2 opacity-90" strokeWidth={1} />
                  <div className="text-[22px] lg:text-[24px] font-bold text-white mb-0.5">{value}</div>
                  <div className="text-[11px] lg:text-[11.5px] text-gray-400 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
