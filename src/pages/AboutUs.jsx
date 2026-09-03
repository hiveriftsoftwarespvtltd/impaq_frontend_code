import React from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar, Users, Shield, Handshake,
  ArrowRight, CheckCircle2, Globe, Settings,
  Award, Briefcase
} from 'lucide-react'
import SectionTag from '../components/SectionTag'
import SectionHeading from '../components/SectionHeading'
import PrincipleCard from '../components/PrincipleCard'
import aboutVideo from '../assets/all_banner_video/About us.mov'

const stats = [
  { icon: Calendar, value: '2024', label: 'Founded In' },
  { icon: Users, value: '50+', label: 'Skilled Engineers' },
  { icon: Shield, value: '100%', label: 'Dedicated to Clients' },
  { icon: Handshake, value: 'Long Term', label: 'Partnership Focus' },
]

const principles = [
  { icon: Users, title: 'Highly Skilled Engineering Professionals', description: 'Top technical talent with the right expertise.' },
  { icon: CheckCircle2, title: 'Strong Technical Screening', description: 'Rigorous evaluation for quality and reliability.' },
  { icon: Globe, title: 'European Business Understanding', description: 'Aligned with European standards and culture.' },
  { icon: Settings, title: 'Flexible Remote Collaboration Models', description: 'Adaptable engagement that fits your workflow.' },
  { icon: Handshake, title: 'Long-term Partnership Mentality', description: 'We grow when our clients grow.' },
]

export default function AboutUs() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[400px] lg:min-h-[480px] flex items-center">
        {/* Full width video background */}
        <div className="absolute inset-0 z-0">
          <video
            src={aboutVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
          <div className="flex flex-col items-center py-16 lg:py-20">
            {/* Center text */}
            <div className="w-full lg:w-[80%] animate-fade-in-up text-center flex flex-col items-center">
              <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
                ABOUT US
              </p>
              <h1 className="text-4xl lg:text-[54px] font-serif font-bold text-white leading-tight mb-6">
                Engineering Capacity<br />Without Borders
              </h1>
              <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mx-auto mb-6" />
              <p className="text-[13px] lg:text-[14px] font-medium text-gray-200 leading-relaxed max-w-[600px] mx-auto">
                Impaqwerk helps European engineering companies scale faster through dedicated remote engineering support from India's leading technical talent hub in Pune.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left text */}
            <div>
              <SectionTag>Our Story</SectionTag>
              <SectionHeading title="Built to Bridge. Driven to Deliver." />
              <div className="mt-5 space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  Founded in 2024, Impaqwerk was built to bridge the growing gap between engineering demand in Europe and the shortage of highly skilled technical professionals available locally. Our focus is simple: provide reliable, long-term engineering capacity that integrates directly into our clients' operations.
                </p>
                <p>
                  We support companies in mechanical engineering, industrial automation, steel structures, machine building, manufacturing systems, and technical documentation by providing experienced remote professionals who work exclusively for each client.
                </p>
                <p>
                  Unlike traditional outsourcing models, our engineers become part of your team. We focus on technical alignment, communication quality, cultural understanding, and long-term collaboration.
                </p>
                <p>
                  With years of experience supporting Dutch engineering companies, we understand both the technical expectations and the working culture required to build successful international engineering teams.
                </p>
              </div>
            </div>
            {/* Right image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop&auto=format"
                alt="Impaqwerk reception"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-6 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-2xl py-10 lg:py-12 px-4 lg:px-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/70">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center py-6 lg:py-2 px-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm border border-gray-50">
                    <Icon className="w-7 h-7 text-[#E32B2B]" strokeWidth={1.5} />
                  </div>
                  <div className="text-[26px] lg:text-[32px] font-serif font-bold text-[#0E1525] mb-2 leading-none">{value}</div>
                  <div className="text-[12px] lg:text-[13px] text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag>What We Believe</SectionTag>
            <SectionHeading
              title="Our Principles Drive Everything We Do"
              centered
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {principles.map((p, i) => (
              <PrincipleCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-12 lg:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-10">
              <SectionTag>Leadership</SectionTag>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Message From Our Managing Director
              </h2>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                "At ImpaqWerk, we take immense pride in offering cost-effective engineering services that combine the expertise and innovation of Indian engineers with the unique needs of European small and mid-sized companies. Our team is comprised of highly skilled professionals who are committed to delivering exceptional results and exceeding your expectations."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Mr. Dipak Shinde</h4>
                <p className="text-sm text-[#E32B2B] font-semibold">Managing Director</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              {/* Photo Placeholder */}
              <div className="w-64 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center border border-gray-300">
                <p className="text-gray-400 font-medium text-sm px-6 text-center">
                  MD Photo<br/>(Coming Soon)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
