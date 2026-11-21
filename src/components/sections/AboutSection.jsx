import { Link } from 'react-router-dom'
import { BedDouble, Users, Clock, ArrowRight, ShieldCheck } from 'lucide-react'
import { Container } from '../ui/index'
import { useInView } from '../../hooks/index'

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Doctor Patient Consultation Image (Span 5 on Desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] sm:rounded-tl-[70px] sm:rounded-br-[50px] overflow-hidden shadow-xl aspect-[1.15/1] bg-gradient-to-tr from-teal-50 to-slate-100 border-4 border-white">
              {/* High-quality Real Hospital Reception / Interior Photo */}
              <img
                src="/images/facilities/hospital-reception.jpg"
                alt="Malik Life Care Hospital 24/7 reception desk and patient care lobby"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = '/images/facilities/hospital-interior.jpg'
                }}
              />

              {/* High-fidelity Fallback */}
              <div className="hidden w-full h-full bg-gradient-to-br from-[#07545B] to-[#007C88] p-8 flex-col justify-center items-center text-center text-white">
                <ShieldCheck className="w-12 h-12 text-teal-200 mb-3" />
                <span className="font-extrabold text-xl">
                  Dedicated Doctor Consultation
                </span>
                <span className="text-xs text-teal-100 mt-2">
                  Ethical &amp; Patient-First Approach
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Narrative & 3 Stats (Span 7 on Desktop) */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Text Narrative (Span 7) */}
              <div className="md:col-span-7 text-left">
                {/* Lavender Badge */}
                <div className="inline-block bg-[#F7EBF5] text-[#680858] font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
                  About Us
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight">
                  Care that Earns Lasting Trust
                </h2>

                <p className="mt-3 sm:mt-4 text-[#4A6568] text-sm sm:text-base leading-relaxed text-justify">
                  A patient-first multispeciality hospital with advanced treatment,
                  a 50-bed facility and a compassionate care team.
                </p>

                <p className="mt-2.5 text-[#4A6568] text-xs sm:text-sm leading-relaxed text-justify">
                  Malik Life Care Hospital brings together multi-speciality disciplines,
                  advanced diagnostic machinery, and thoughtfully designed patient spaces
                  centred around dignity and ethical medicine.
                </p>

                <div className="mt-5">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#007C88] hover:text-[#07545B] transition-colors group"
                  >
                    <span>Read More About Our Story</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Stats Block (Span 5) - Vertical green circle icons as in MedixWeb screenshot */}
              <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-4 pt-3 md:pt-1 md:border-l md:border-gray-100 md:pl-6">
                {/* 50 Bed Capacity */}
                <div className="flex items-center gap-3 bg-[#F9FBFC] md:bg-transparent p-3 md:p-0 rounded-2xl border md:border-none border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-[#EDF8F2] flex items-center justify-center text-[#4B9B75] shrink-0">
                    <BedDouble className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-black text-xl text-[#173C4B] leading-none">
                      50
                    </span>
                    <span className="text-xs text-[#6B8A8D] font-medium">
                      Bed Capacity
                    </span>
                  </div>
                </div>

                {/* 11 Specialities */}
                <div className="flex items-center gap-3 bg-[#F9FBFC] md:bg-transparent p-3 md:p-0 rounded-2xl border md:border-none border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-[#EDF8F2] flex items-center justify-center text-[#4B9B75] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-black text-xl text-[#173C4B] leading-none">
                      11
                    </span>
                    <span className="text-xs text-[#6B8A8D] font-medium">
                      Specialities
                    </span>
                  </div>
                </div>

                {/* 24/7 Care & Support */}
                <div className="flex items-center gap-3 bg-[#F9FBFC] md:bg-transparent p-3 md:p-0 rounded-2xl border md:border-none border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-[#EDF8F2] flex items-center justify-center text-[#4B9B75] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-black text-xl text-[#173C4B] leading-none">
                      24/7
                    </span>
                    <span className="text-xs text-[#6B8A8D] font-medium">
                      Care &amp; Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
