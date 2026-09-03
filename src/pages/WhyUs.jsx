import React from 'react'
import { Link } from 'react-router-dom'
import {
  Users, Shield, TrendingUp, MessageSquare,
  Award, Globe, PiggyBank, Handshake,
  Calendar, CheckCircle2, Star
} from 'lucide-react'
import SectionTag from '../components/SectionTag'
import SectionHeading from '../components/SectionHeading'
import PrincipleCard from '../components/PrincipleCard'
import { ArrowRight } from 'lucide-react'

const reasons = [
  { icon: Users, title: 'Dedicated Engineers', description: 'Our engineers work exclusively for your projects as part of your extended team.' },
  { icon: Shield, title: 'Proven Reliability', description: 'We deliver consistent quality with a strong focus on deadlines and commitments.' },
  { icon: TrendingUp, title: 'Scalable Capacity', description: 'Scale your engineering team up or down quickly based on your project needs.' },
  { icon: MessageSquare, title: 'Clear Communication', description: 'Designed overlap, regular updates, and transparent communication at every step.' },
  { icon: Award, title: 'Quality & Standards', description: 'We follow international engineering standards and best practices.' },
  { icon: Globe, title: 'European Business Understanding', description: 'We understand European working culture, expectations, and project execution style.' },
  { icon: PiggyBank, title: 'Cost Efficiency', description: 'Reduce hiring, infrastructure, and operational costs without compromising on quality.' },
  { icon: Handshake, title: 'Long-Term Partnership', description: 'We believe in building long-term relationships and growing together.' },
]

const partnerPoints = [
  'We integrate with your tools, systems & workflows',
  'We align with your goals and success metrics',
  'We take ownership and drive results',
  'We continuously improve and optimize',
  'We grow as your business grows',
]

const stats = [
  { icon: Calendar, value: '2024', label: 'Founded In' },
  { icon: Users, value: '50+', label: 'Skilled Engineers' },
  { icon: Shield, value: '100%', label: 'Dedicated to Clients' },
  { icon: Handshake, value: 'Long Term', label: 'Partnership Focus' },
]

export default function WhyUs() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden min-h-[400px] lg:min-h-[460px]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center min-h-[400px] lg:min-h-[460px]">
            <div className="lg:w-[52%] py-14 lg:py-20 z-10 animate-fade-in-up">
              <SectionTag>Why Choose Impaqwerk</SectionTag>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-1">
                Engineering Excellence.
              </h1>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                People You Can Rely On<span className="text-red-600">.</span>
              </h1>
              <div className="w-12 h-1 bg-red-600 mb-5" />
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-md">
                We go beyond outsourcing. We become an extension of your engineering team, delivering reliable, high-quality results that help your business grow.
              </p>
            </div>
            <div className="hidden lg:block lg:w-[48%] absolute right-0 top-0 bottom-0">
              <img
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?w=900&h=540&fit=crop&auto=format"
                alt="Engineering team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY COMPANIES TRUST IMPAQWERK ── */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
              OUR PROMISE
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-serif font-bold text-[#0E1525] leading-tight mb-4">
              Why Companies Trust Impaqwerk
            </h2>
            <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
              We combine technical expertise, strong processes, and a partnership mindset to deliver long-term value to your engineering operations.
            </p>
            <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-xl p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <r.icon className="w-8 h-8 text-[#E32B2B] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.2} />
                </div>
                <h3 className="text-[16px] lg:text-[17px] font-serif font-bold text-[#0E1525] mb-3 leading-snug">{r.title}</h3>
                <p className="text-[12px] lg:text-[12.5px] text-gray-500 leading-[1.6] px-1">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WE THINK LIKE PARTNERS ── */}
      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-[#F8F9FA] border border-gray-100 rounded-2xl py-6 px-8 lg:py-8 lg:px-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative">
              {/* Left text */}
              <div className="lg:col-span-5 pr-0 lg:pr-6">
                <p className="text-[11px] lg:text-[11.5px] font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
                  WHY WE'RE DIFFERENT
                </p>
                <h2 className="text-[26px] lg:text-[34px] font-serif font-bold text-[#0E1525] leading-tight mb-4">
                  We Think Like Partners,<br />Not Like Vendors.
                </h2>
                <p className="text-[13px] lg:text-[14px] text-gray-600 leading-[1.7]">
                  Our goal is not just to complete tasks — we focus on understanding your business, solving engineering challenges, and helping you achieve your goals.
                </p>
              </div>

              {/* Center icon */}
              <div className="lg:col-span-3 flex items-center justify-center relative py-6">
                <div className="relative flex items-center justify-center w-40 h-40">
                  {/* Outer dotted ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-gray-300" />
                  {/* Small red dots */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[3px] w-1.5 h-1.5 bg-[#E32B2B] rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[3px] w-1.5 h-1.5 bg-[#E32B2B] rounded-full" />
                  
                  {/* Inner dark navy circle */}
                  <div className="w-28 h-28 bg-[#0E1525] rounded-full flex items-center justify-center shadow-lg relative">
                    <Users className="w-11 h-11 text-white" strokeWidth={1.5} />
                    {/* Star overlay */}
                    <div className="absolute bottom-5 right-5 bg-[#0E1525] p-0.5 rounded-full">
                      <Star className="w-4 h-4 text-white fill-white" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical divider on desktop */}
              <div className="hidden lg:block absolute left-[66.666%] top-1/2 -translate-y-1/2 h-[75%] w-[1px] border-r border-dotted border-gray-300" />

              {/* Right checklist */}
              <div className="lg:col-span-4 pl-0 lg:pl-10 space-y-4">
                {partnerPoints.map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#E32B2B] flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[12px] lg:text-[13px] font-medium text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-[#0E1525] rounded-2xl py-8 px-6 lg:py-10 lg:px-12 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
              {stats.map(({ icon: Icon, value, label }, index) => (
                <div key={label} className={`flex items-center gap-4 lg:justify-center ${index !== 3 ? 'lg:border-r lg:border-white/10' : ''}`}>
                  <Icon className="w-10 h-10 text-[#E32B2B] flex-shrink-0" strokeWidth={1.2} />
                  <div>
                    <div className="text-[26px] lg:text-[32px] font-serif font-bold text-white leading-none mb-1.5">{value}</div>
                    <div className="text-[11.5px] lg:text-[12px] text-gray-300 font-medium tracking-wide">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA WITH PHOTO ── */}
      <section className="pb-16 pt-8 lg:pb-20 lg:pt-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative min-h-[320px] flex items-center border border-gray-100">
            {/* Right Background Image with Fade */}
            <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[65%]">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=500&fit=crop&auto=format"
                alt="Partnership handshake"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/90 to-transparent lg:w-[60%]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-8 py-8 lg:px-12 lg:py-10">
              <div className="lg:w-[48%] relative lg:pr-12">
                <p className="text-[11px] lg:text-[11.5px] font-bold tracking-[0.15em] text-[#E32B2B] uppercase mb-4">
                  READY TO BUILD YOUR ENGINEERING TEAM?
                </p>
                <h2 className="text-[32px] lg:text-[40px] font-serif font-bold text-[#0E1525] leading-tight mb-5">
                  Let's Build Something<br />Great Together.
                </h2>
                <p className="text-[13px] lg:text-[14px] text-gray-600 leading-[1.7] mb-8 max-w-[420px]">
                  Partner with Impaqwerk and get the engineering capacity you need to innovate, deliver, and grow faster.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#E32B2B] hover:bg-red-700 text-white text-[13px] font-bold px-6 py-3 rounded transition-all duration-200 hover:scale-105 shadow-md group"
                >
                  Let's Discuss Your Requirements
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Red Vertical Line Divider */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-[1px] bg-[#E32B2B]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
