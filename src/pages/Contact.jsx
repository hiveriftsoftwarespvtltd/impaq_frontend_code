import React from 'react'
import SectionTag from '../components/SectionTag'
import { CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const discussionPoints = [
    'Remote engineering capacity',
    'Long-term engineering support',
    'Project-based technical assistance',
    'Mechanical and structural engineering services',
    'International engineering collaboration'
  ]

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden min-h-[360px] lg:min-h-[420px] flex items-center border-b border-gray-100">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] z-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&h=600&fit=crop&auto=format"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/40" />
          <div className="absolute inset-0 bg-white/40 lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center py-16 lg:py-20">
            <div className="lg:w-[50%] animate-fade-in-up">
              <p className="text-[11px] lg:text-xs font-bold tracking-[0.2em] text-[#E32B2B] uppercase mb-4">
                CONTACT US
              </p>
              <h1 className="text-4xl lg:text-[54px] font-serif font-bold text-[#0E1525] leading-tight mb-6">
                Let's Start a<br />Conversation
              </h1>
              <div className="w-12 h-[3px] bg-[#E32B2B] rounded-full mb-6" />
              <p className="text-[13px] lg:text-[14px] font-medium text-gray-700 leading-relaxed max-w-[440px]">
                Reach out to discuss your engineering capacity needs. We'll get back to you within 24 hours to explore how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionTag>Contact Details</SectionTag>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Let’s Build Engineering Capacity Together
              </h2>
              <div className="w-12 h-1 bg-[#E32B2B] mb-5" />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Whether you are facing engineering shortages, project delays, or growth challenges, Impaqwerk Pvt. Ltd. can help you scale efficiently through dedicated remote engineering support.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mb-4">We are ready to discuss:</h3>
              <ul className="space-y-3 mb-10">
                {discussionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#E32B2B] mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm text-gray-600 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div><strong className="text-gray-900 block mb-1">Impaqwerk Pvt. Ltd.</strong> Office no - 03A, 4th Floor, A Building, City Vista Down town, Fountain Road, Kharadi, Pune, Maharashtra, 411014, India</div>
                <div className="flex items-center gap-2"><strong className="text-gray-900">Phone:</strong> <a href="tel:+918446999276" className="text-[#E32B2B] hover:underline">+91 8446999276</a></div>
                <div className="flex items-center gap-2"><strong className="text-gray-900">Email:</strong> <a href="mailto:Dipak@impactas.nl" className="text-[#E32B2B] hover:underline">Dipak@impactas.nl</a></div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Consultation</h2>
              <p className="text-sm text-gray-600 mb-8">
                Let’s discuss how your engineering organization can scale faster, reduce operational pressure, and improve flexibility through dedicated remote engineering solutions.
              </p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">First Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E32B2B] focus:ring-1 focus:ring-[#E32B2B] transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E32B2B] focus:ring-1 focus:ring-[#E32B2B] transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
                  <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E32B2B] focus:ring-1 focus:ring-[#E32B2B] transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E32B2B] focus:ring-1 focus:ring-[#E32B2B] transition-colors resize-none" placeholder="Tell us about your engineering needs..." />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E32B2B] hover:bg-red-700 text-white text-sm font-semibold py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="bg-white">
        <div className="w-full h-[400px] lg:h-[500px]">
          <iframe
            title="Impaqwerk Office Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=18.5610219,73.9446612&t=&z=17&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
