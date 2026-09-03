import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Users, Users2, TrendingUp, Handshake,
  Settings, Zap, Building2, Wrench, FileText, Briefcase,
  Calendar, Shield, CheckCircle2, BarChart3, Target, Eye,
  MessageSquare, ClipboardList, Cog, MapPin
} from 'lucide-react'
import SectionTag from '../components/SectionTag'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ProcessStep from '../components/ProcessStep'
import homeVideo from '../assets/all_banner_video/home page.mov'

/* ─── DATA ─────────────────────────────────────── */
const services = [
  { icon: Settings,    title: 'Mechanical Design Engineering',    description: '3D modeling, machine design, assembly & detailing.' },
  { icon: Zap,         title: 'Industrial Automation Support',    description: 'Electrical design, control systems, PLC, HMI & SCADA support.' },
  { icon: Building2,   title: 'Structural Engineering & Tekla',   description: 'Tekla modeling, steel structural detailing & shop drawings.' },
  { icon: Wrench,      title: 'Manufacturing Support',            description: 'Manufacturing drawings, BOM, process planning & documentation.' },
  { icon: FileText,    title: 'Technical Documentation',          description: 'User manuals, assembly instructions, datasheets & more.' },
  { icon: Briefcase,   title: 'Project Based Support',            description: 'End-to-end engineering support for your critical projects.' },
]

const processSteps = [
  { icon: MessageSquare, title: 'Understand',    description: 'We understand your requirements.' },
  { icon: Users,         title: 'Select',        description: 'We find and present the right engineer for you.' },
  { icon: ClipboardList, title: 'Onboard',       description: 'Smooth onboarding & tool access setup.' },
  { icon: Cog,           title: 'Collaborate',   description: 'Engineer works as part of your extended team.' },
  { icon: TrendingUp,    title: 'Deliver & Grow',description: 'Consistent delivery & continuous improvement.' },
]

const industries = [
  { label: 'Industrial Automation',       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=180&fit=crop&auto=format' },
  { label: 'Machine Building',            image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=300&h=180&fit=crop&auto=format' },
  { label: 'Structural Engineering',      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=180&fit=crop&auto=format' },
  { label: 'Manufacturing Systems',       image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=180&fit=crop&auto=format' },
  { label: 'Mechanical Design',           image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=300&h=180&fit=crop&auto=format' },
  { label: 'Steel Construction',          image: 'https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?w=300&h=180&fit=crop&auto=format' },
  { label: 'Engineering\nConsultancy Firms', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=180&fit=crop&auto=format' },
]

const whyUsLeft = [
  'Dedicated engineering professionals',
  'Fast team scaling capability',
  'Strong understanding of European standards',
  'Reliable communication structure',
]
const whyUsRight = [
  'Long-term collaboration mindset',
  'Significant cost efficiency',
  'Flexible cooperation models',
  'Technical & cultural alignment',
]

const stats = [
  { icon: Calendar,  value: '2024',      label: 'Founded In' },
  { icon: Users,     value: '50+',       label: 'Skilled Engineers' },
  { icon: Shield,    value: '100%',      label: 'Dedicated to Clients' },
  { icon: Handshake, value: 'Long Term', label: 'Partnership Focus' },
]

const testimonials = [
  {
    quote: "Impaqwerk has been an excellent partner. Their engineers integrated quickly with our team and deliver high quality work consistently.",
    name: "Project Manager",
    location: "Netherlands",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&auto=format"
  },
  {
    quote: "The technical expertise and dedication shown by the team exceeded our expectations. Truly a seamless collaboration.",
    name: "Lead Engineer",
    location: "Germany",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=48&h=48&fit=crop&auto=format"
  },
  {
    quote: "Scaling our engineering capacity was effortless with Impaqwerk. They understand European standards perfectly.",
    name: "Operations Director",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&auto=format"
  }
];

/* ─── PAGE ─────────────────────────────────────── */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>

      {/* ══════════════════════════════════════════
          HERO
          Full width video background with dark overlay
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: 520 }}>
        {/* Full background video */}
        <div className="absolute inset-0 z-0">
          <video
            src={homeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full w-full flex flex-col justify-center">
          <div className="w-full lg:w-[80%] mx-auto text-center pt-16 pb-10 lg:pt-20 lg:pb-16 flex flex-col items-center">

            {/* Headline */}
            <h1 className="text-[42px] lg:text-[52px] xl:text-[60px] font-extrabold text-white leading-[1.1] mb-0">
              Your Engineering<br />Capacity.
            </h1>
            <h2 className="text-[42px] lg:text-[52px] xl:text-[60px] font-extrabold text-[#E32B2B] leading-[1.1] mb-5">
              Our Remote Talent.
            </h2>

            {/* Subtitle */}
            <p className="text-sm lg:text-[15px] text-gray-200 leading-relaxed mb-8 max-w-[600px] mx-auto">
              Welcome to <strong className="text-white">ImpaqWerk</strong>. We bridge the gap between European businesses and world-class remote engineering talent. Our mission is to deliver high-impact engineering solutions that drive your business forward in a competitive global market.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#E32B2B] hover:bg-red-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-red-600/30 group"
              >
                Hire Your Remote Engineer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3 rounded-lg transition-all backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust badges — 4 in a single row */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Users,     label: 'Dedicated\nProfessionals' },
                { icon: TrendingUp,label: 'Cost\nEfficient' },
                { icon: BarChart3, label: 'Scalable\nTeams' },
                { icon: Handshake, label: 'Long Term\nPartnership' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-8 h-8 text-white/80" strokeWidth={1.5} />
                  <span className="text-[11px] font-medium text-gray-200 leading-tight whitespace-pre-line">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT US PREVIEW
          Reference: 4-col grid. Col 1 = tag+heading+body+CTA.
          Cols 2-4 = 3 cards (Mission / Vision / Values) centered content.
      ══════════════════════════════════════════ */}
      <section className="py-14 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">

            {/* Col 1 — left text block */}
            <div className="lg:col-span-1">
              <SectionTag>About Us</SectionTag>
              <h2 className="text-2xl lg:text-[26px] font-extrabold text-gray-900 leading-snug mb-3">
                Engineering Capacity<br />Without Borders
              </h2>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                Impaqwerk helps European engineering companies scale faster through dedicated remote engineering support from India's leading technical talent hub in Pune.
              </p>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
                Our engineers integrate seamlessly with your team, understand your standards, and deliver long-term value.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[13px] font-semibold px-4 py-2 rounded transition-all duration-200 hover:scale-105 group"
              >
                Know More About Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Col 2 — Mission */}
            <div className="group border border-gray-100 rounded-lg p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                <Target className="w-7 h-7 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Deliver high-impact engineering solutions that drive your business forward.
              </p>
            </div>

            {/* Col 3 — Vision */}
            <div className="group border border-gray-100 rounded-lg p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                <Eye className="w-7 h-7 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                To be the most trusted partner for remote engineering talent across Europe.
              </p>
            </div>

            {/* Col 4 — Values */}
            <div className="group border border-gray-100 rounded-lg p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                <Users2 className="w-7 h-7 text-red-600" strokeWidth={2} />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-3 text-center">Our Values</h3>
              <ul className="space-y-1.5">
                {['Integrity', 'Commitment', 'Collaboration', 'Excellence'].map(v => (
                  <li key={v} className="flex items-center gap-2 text-[13px] text-gray-600">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
          Reference: centered tag + large heading + subtitle.
          6 cards in 6-col row. "View All Services" centered below.
      ══════════════════════════════════════════ */}
      <section className="py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered heading block */}
          <div className="text-center mb-10">
            <SectionTag>Services</SectionTag>
            <h2 className="text-3xl lg:text-[34px] font-extrabold text-gray-900 mb-2">
              Dedicated Remote Engineering Services
            </h2>
            <p className="text-[13px] text-gray-500">Skilled engineers. Advanced tools. Seamless collaboration.</p>
          </div>

          {/* 6 cards in a single row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>

          {/* "View All Services" centered */}
          <div className="flex justify-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-[13px] font-semibold px-5 py-2.5 rounded transition-all duration-200 group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY US / EXTENDED ENGINEERING TEAM
          Reference: Left = tag (red small) + big heading + subtitle + 2-col checklist.
          Right = 2×2 grid of stat cards.
      ══════════════════════════════════════════ */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left column */}
            <div>
              <SectionTag>Why Companies Partner With Us</SectionTag>
              <h2 className="text-2xl lg:text-[30px] font-extrabold text-gray-900 leading-tight mb-2">
                How We Can Help
              </h2>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
                We deliver specialized engineering services built for your exact operational challenges. By connecting you with India’s top engineering talent, we help you streamline workflows, boost productivity, and scale your technical capabilities efficiently.
              </p>

              {/* 2-column checklist — exactly as reference */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                <div className="flex flex-col gap-2.5">
                  {whyUsLeft.map(point => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2.5">
                  {whyUsRight.map(point => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-[13px] text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — 2×2 stat card grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="border border-gray-100 rounded-lg p-6 flex flex-col items-start shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-red-600" strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900 leading-none mb-1">{value}</div>
                  <div className="text-[12px] text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES
          Reference: centered tag + heading. Then 7 image cards
          in a single full-width horizontal row. Each card has dark
          overlay and label text centered at bottom.
      ══════════════════════════════════════════ */}
      <section className="py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading — centered, with red underline below */}
          <div className="text-center mb-8">
            <SectionTag>Industries We Support</SectionTag>
            <h2 className="text-2xl lg:text-[30px] text-gray-900 mb-3">
              We Work With Industries That Build The Future
            </h2>
            {/* Short red accent line — as in reference */}
            <div className="w-12 h-[3px] bg-red-600 mx-auto rounded-full" />
          </div>

          {/* 7 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {industries.map(({ label, image }) => (
              <div
                key={label}
                className="group flex flex-col rounded-xl overflow-hidden cursor-pointer shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative h-[110px] lg:h-[130px] overflow-hidden">
                  <img
                    src={image}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Solid Rectangular Text Strip */}
                <div className="bg-[#0E1525] p-3 flex flex-1 items-center justify-center text-center">
                  <p className="text-white text-[11px] lg:text-[12px] !font-semibold leading-tight antialiased">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS — PROCESS
          Reference: dark navy full-width. Centered tag + heading.
          5 steps in a horizontal row. Each step: dark circle icon
          (with red numbered badge), step label, title, description.
          Dashed connector line between circles.
      ══════════════════════════════════════════ */}
      <section className="py-8 lg:py-10 bg-[#0E1525]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered heading */}
          <div className="text-center mb-16">
            <SectionTag>How It Works</SectionTag>
            <h2 className="text-2xl lg:text-[32px] font-extrabold text-white">Simple Process. Strong Results.</h2>
          </div>

          {/* 5 steps in row */}
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="group relative flex flex-col items-center text-center">
                
                {/* Dotted connector to next step */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[30px] left-[calc(50%+30px)] right-[calc(-50%+30px)] h-[2px] border-t-2 border-dotted border-gray-500 z-0 opacity-50" />
                )}

                {/* Icon circle with dark ring */}
                <div className="relative z-10 w-[60px] h-[60px] rounded-full bg-[#E32B2B] flex items-center justify-center mb-5 ring-[6px] ring-[#1a2540] shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-500">
                  <step.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                {/* Text Block */}
                <h3 className="text-[14px] lg:text-[15px] font-bold text-white mb-0.5">Step {i + 1}</h3>
                <h3 className="text-[14px] lg:text-[15px] font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[11px] text-gray-300 leading-relaxed max-w-[140px] antialiased">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIAL + CTA
          Reference: side-by-side. Left = testimonial card
          Right = dark navy box with MapPins
      ══════════════════════════════════════════ */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/* Left — testimonial card */}
            <div className="flex flex-col">
              <div className="text-center mb-6">
                <SectionTag>What Our Clients Say</SectionTag>
              </div>
              <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-lg p-6 lg:p-8 flex flex-col relative">
                {/* Large decorative quotes */}
                <span className="absolute top-4 left-6 text-[50px] text-gray-200 font-serif leading-none select-none">"</span>
                <span className="absolute top-4 right-6 text-[50px] text-gray-200 font-serif leading-none select-none">"</span>
                
                <div className="flex-1 flex flex-col justify-center relative z-10 mt-4">
                  {/* Slider Container with fast transition */}
                  <div className="relative overflow-hidden h-[90px] lg:h-[80px] w-full">
                    {testimonials.map((t, idx) => (
                      <div
                        key={idx}
                        className={`absolute inset-0 w-full transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${
                          idx === activeTestimonial 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-8 pointer-events-none'
                        }`}
                      >
                        <blockquote className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed text-center italic w-[90%]">
                          {t.quote}
                        </blockquote>
                      </div>
                    ))}
                  </div>

                  {/* Reviewer */}
                  <div className="flex flex-col items-center mt-4">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 mb-2"
                    />
                    <p className="text-[13px] font-bold text-gray-900">{testimonials[activeTestimonial].name}</p>
                    <p className="text-[12px] text-gray-500">{testimonials[activeTestimonial].location}</p>
                  </div>
                </div>

                {/* Dot pagination */}
                <div className="flex justify-center gap-2 mt-5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeTestimonial ? 'bg-[#E32B2B] ring-2 ring-[#E32B2B]/20' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right — dark navy CTA box */}
            <div className="bg-[#0E1525] rounded-xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-center shadow-lg mt-11">
              {/* Subtle world map bg decoration */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
                  <ellipse cx="200" cy="150" rx="180" ry="120" stroke="white" strokeWidth="0.5"/>
                  <path d="M155 80 Q200 60 245 85 Q265 100 255 125 Q235 135 200 130 Q162 125 155 80Z" fill="white"/>
                  <path d="M260 80 Q300 65 325 90 Q340 108 320 120 Q295 130 270 118 Q248 105 260 80Z" fill="white"/>
                  <path d="M272 112 Q290 105 300 125 Q296 148 278 155 Q265 140 272 112Z" fill="white" opacity="0.5"/>
                </svg>
              </div>

              {/* Pin Europe */}
              <div className="absolute top-[20%] right-[15%] hidden md:flex items-center gap-2 animate-fade-in-up delay-200">
                <div className="relative flex justify-center">
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20" />
                  <MapPin className="w-7 h-7 text-white fill-red-600 relative z-10" />
                  <div className="absolute top-[7px] w-2 h-2 bg-white rounded-full z-20" />
                </div>
                <span className="text-white font-bold text-[14px]">Europe</span>
              </div>

              {/* Pin India */}
              <div className="absolute bottom-[20%] right-[25%] hidden md:flex items-center gap-2 animate-fade-in-up delay-400">
                <div className="relative flex justify-center">
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20" />
                  <MapPin className="w-7 h-7 text-white fill-red-600 relative z-10" />
                  <div className="absolute top-[7px] w-2 h-2 bg-white rounded-full z-20" />
                </div>
                <span className="text-white font-bold text-[14px]">India (Pune)</span>
              </div>

              <div className="relative z-10 max-w-[280px]">
                <h3 className="text-[22px] lg:text-[26px] font-extrabold text-white mb-3 leading-snug">
                  Ready to Scale Your<br />Engineering Capacity?
                </h3>
                <div className="w-10 h-[3px] bg-red-600 rounded-full mb-5" />
                <p className="text-[13px] text-gray-300 mb-8 leading-relaxed">
                  Get dedicated remote engineers who work exclusively for your business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[13px] font-semibold px-5 py-2.5 rounded transition-all duration-200 hover:scale-105 group"
                >
                  Let's Discuss Your Requirements
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Location markers */}
                <div className="flex flex-col gap-2 mt-6">
                  <div className="flex items-center gap-2 text-[12px] text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    Europe
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-gray-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    India (Pune)
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
