import React from 'react'
import {
  Settings, Zap, Building2, Wrench, FileText, Briefcase,
  Search, Headphones, Users, BadgeCheck, TrendingUp
} from 'lucide-react'
import SectionTag from '../components/SectionTag'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ProcessStep from '../components/ProcessStep'
import CTABanner from '../components/CTABanner'
import servicesVideo from '../assets/all_banner_video/service page.mov'

const services = [
  {
    icon: Settings,
    title: 'Mechanical Design Engineering',
    description: 'We provide mechanical design engineering support for a wide range of industrial and manufacturing applications, including machine design, 3D modeling, mechanical assemblies, manufacturing drawings, and product development. Our engineers work as an extension of your existing team, helping transform concepts into practical, production-ready engineering solutions while maintaining high technical accuracy and efficient project execution.',
    linkLabel: 'Learn More',
  },
  {
    icon: Wrench,
    title: '2D Drafting Services',
    description: 'Our technical drafting services support the complete engineering documentation process, from production and assembly drawings to highly detailed technical layouts and CAD documentation. We help companies maintain accurate and organized engineering records through structured revision management, ensuring that all drawings remain aligned with project updates, manufacturing requirements, and industry standards.',
    linkLabel: 'Learn More',
  },
  {
    icon: Zap,
    title: 'Electrical Design Engineering',
    description: 'We provide electrical design engineering support for industrial projects requiring reliable and well-structured automation systems. Our services include the development of electrical schematics, control panel layouts, automation support, and complete industrial electrical documentation. By working closely with your engineering team, we help ensure technical consistency, clear documentation, and efficient integration into existing production and automation environments.',
    linkLabel: 'Learn More',
  },
  {
    icon: Building2,
    title: 'Structural Engineering & Tekla Modeling',
    description: 'Our structural engineering services support complex industrial and construction projects through detailed steel structure engineering, Tekla modeling, structural calculations, fabrication drawings, and complete construction documentation. We help clients improve project accuracy, coordination, and production efficiency by delivering technically precise engineering data that supports both fabrication and on-site implementation.',
    linkLabel: 'Learn More',
  },
  {
    icon: FileText,
    title: 'Technical Documentation',
    description: 'We provide technical documentation support that helps engineering teams maintain clear, structured, and professional project communication. Our services include the creation of technical manuals, engineering documentation, work instructions, product documentation, and technical reporting. By ensuring consistency and accuracy throughout the documentation process, we help clients improve operational clarity, training efficiency, and overall project organization.',
    linkLabel: 'Learn More',
  },
  {
    icon: Briefcase,
    title: 'Sales Layout Engineering',
    description: 'We support technical sales and engineering teams with professional concept layouts, proposal drawings, engineering visualizations, and pre-sales technical support. Our goal is to help clients present technical solutions clearly and professionally during the sales process, improving communication with customers while supporting faster and more effective project evaluation and decision-making.',
    linkLabel: 'Learn More',
  },
]

const processSteps = [
  { icon: Users, title: 'Understand', description: 'We understand your requirements and project goals.' },
  { icon: BadgeCheck, title: 'Select', description: 'We find and present the right engineering talent for your needs.' },
  { icon: FileText, title: 'Onboard', description: 'Smooth onboarding and tool access setup.' },
  { icon: Settings, title: 'Collaborate', description: 'Engineers work as part of your extended team.' },
  { icon: TrendingUp, title: 'Deliver & Grow', description: 'Consistent delivery & continuous improvement to help you grow.' },
]

export default function Services() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[400px] lg:min-h-[480px] flex items-center">
        {/* Full width video background */}
        <div className="absolute inset-0 z-0">
          <video
            src={servicesVideo}
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
                SERVICES
              </p>
              <h1 className="text-4xl lg:text-[54px] font-serif font-bold text-white leading-tight mb-6">
                Dedicated Remote<br />Engineering Services
              </h1>
              <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mx-auto mb-6" />
              <p className="text-[13px] lg:text-[14px] font-medium text-gray-200 leading-relaxed max-w-[600px] mx-auto mb-8">
                Impaqwerk provides highly skilled remote engineering professionals who work exclusively for your company and projects. We help engineering companies increase capacity, reduce hiring pressure, and accelerate project execution.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {[
                  { icon: Users, label: 'Dedicated\nProfessionals' },
                  { icon: BadgeCheck, label: 'Exclusive\nEngagement' },
                  { icon: TrendingUp, label: 'Scalable Engineering\nCapacity' },
                ].map(({ icon: Icon, label }, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-2.5">
                    <Icon className="w-6 h-6 text-[#E32B2B] mt-0.5" strokeWidth={1.5} />
                    <span className="text-[11px] font-bold text-white leading-[1.3] whitespace-pre-line">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
              OUR SERVICE AREAS
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-serif font-bold text-[#0E1525] leading-tight mb-5">
              Engineering Expertise. Delivered Remotely.
            </h2>
            <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14 lg:mb-16">
            <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
              HOW WE WORK
            </p>
            <h2 className="text-[28px] lg:text-[34px] font-serif font-bold text-[#0E1525] leading-tight">
              A Simple Process. Strong Results.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, i) => (
              <ProcessStep
                key={i}
                {...step}
                step={i + 1}
                isLast={i === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Need More Engineering Capacity?"
        subtitle="Let's build your remote engineering team and take your projects forward faster."
      />
    </div>
  )
}
