import { Link } from 'react-router-dom'
import {
  FlaskConical,
  BedDouble,
  Clock,
  Users,
  Phone,
  Siren,
  Building2,
  CheckCircle2,
} from 'lucide-react'
import { HOSPITAL } from '../../data/constants'
import { Container } from '../ui/index'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-bl from-teal-100/40 via-purple-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, CTAs, Stats (Span 6 on desktop) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Top hospital announcement pill */}
            <div className="inline-flex items-center gap-2 bg-[#E6F5F6] text-[#007C88] px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#007C88]" />
              <span>Priority Care Teams on Standby 24/7 · Krishnagiri</span>
            </div>

            {/* Main Headline (Perfect Dual-Tone matching MedixWeb screenshot) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.4rem] font-extrabold text-[#173C4B] leading-[1.12] tracking-tight">
              Advanced Care <br className="hidden sm:inline" />
              <span className="text-[#173C4B]">for </span>
              <span className="text-[#680858]">Every Generation</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 sm:mt-5 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify">
              Multispeciality healthcare with expert doctors, modern technology and
              compassionate care. 50-bed inpatient capacity, advanced diagnostics, and dedicated urgent treatment.
            </p>

            {/* CTA Buttons (Responsive: stack on very small mobile, row on sm+) */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/lab-diagnostics"
                className="btn-purple px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-white font-bold">Book Lab Test</span>
              </Link>

              <Link
                to="/contact"
                className="btn-purple-outline px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-2xs active:scale-95"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#680858]" />
                <span className="text-[#680858] font-bold">Contact Hospital</span>
              </Link>
            </div>

            {/* 3 Stats Pills Row (Responsive Grid on mobile, Flex on desktop) */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-200/70 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              {/* 50 Beds */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-3 bg-white/95 p-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-2xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E6F5F6] flex items-center justify-center text-[#007C88] shrink-0">
                  <BedDouble className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-black text-base sm:text-lg text-[#173C4B] leading-none">
                    50
                  </span>
                  <span className="text-[0.65rem] sm:text-xs text-[#6B8A8D] font-semibold">
                    Beds
                  </span>
                </div>
              </div>

              {/* 24/7 Emergency */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-3 bg-white/95 p-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-2xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E6F5F6] flex items-center justify-center text-[#007C88] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-black text-base sm:text-lg text-[#173C4B] leading-none">
                    24/7
                  </span>
                  <span className="text-[0.65rem] sm:text-xs text-[#6B8A8D] font-semibold">
                    Emergency
                  </span>
                </div>
              </div>

              {/* 10+ Specialists */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-3 bg-white/95 p-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-2xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E6F5F6] flex items-center justify-center text-[#007C88] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-black text-base sm:text-lg text-[#173C4B] leading-none">
                    10+
                  </span>
                  <span className="text-[0.65rem] sm:text-xs text-[#6B8A8D] font-semibold">
                    Specialists
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Artwork with Organic Purple Frame & Emergency Card (Span 6) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-[460px] lg:max-w-[500px]">
              {/* Organic Curved Purple Corner Sweep (Signature MedixWeb aesthetic) */}
              <div className="absolute -top-3.5 -left-3.5 w-32 sm:w-44 h-32 sm:h-44 border-t-[6px] sm:border-t-8 border-l-[6px] sm:border-l-8 border-[#680858] rounded-tl-[60px] sm:rounded-tl-[80px] pointer-events-none z-10 hidden sm:block opacity-95" />

              {/* Main Image Card with Asymmetric Rounded Geometry */}
              <div className="relative rounded-[28px] sm:rounded-[32px] sm:rounded-tl-[75px] sm:rounded-br-[60px] overflow-hidden shadow-xl bg-gradient-to-tr from-teal-50 to-slate-100 border-4 border-white aspect-[16/11] sm:aspect-[1.12/1]">
                <img
                  src="/images/facilities/hospital-exterior.jpg"
                  alt="Malik Life Care Hospital and VAARIS Fertility & IVF Krishnagiri Exterior Building"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = '/images/facilities/hospital-interior.jpg'
                  }}
                />

                {/* Reliable Fallback Graphic if offline */}
                <div className="hidden w-full h-full bg-gradient-to-br from-[#07545B] via-[#007C88] to-[#680858] p-8 flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                      Krishnagiri, Tamil Nadu
                    </span>
                    <span className="text-xs font-semibold text-teal-100">
                      50 Beds Facility
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black">Malik Life Care Hospital</h2>
                    <p className="text-xs text-teal-100 mt-1">
                      Advanced Care for Every Generation
                    </p>
                  </div>
                </div>

                {/* Floating Hospital Badge on top right */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#007C88]" />
                  <span className="text-[0.7rem] font-bold text-[#173C4B]">
                    Malik Life Care Hospital
                  </span>
                </div>
              </div>

              {/* Floating Emergency Badge (Right at bottom corner, as in screenshot) */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-2 sm:right-6 bg-white rounded-full py-1.5 px-3 sm:px-4 sm:py-2.5 shadow-xl flex items-center gap-2 sm:gap-2.5 z-20">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-red-50 flex items-center justify-center text-red-600 animate-pulse shrink-0">
                  <Siren className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-red-600" />
                </div>
                <div className="text-left">
                  <span className="block text-[0.55rem] sm:text-[0.6rem] font-extrabold uppercase tracking-wider text-red-600 leading-none">
                    Emergency
                  </span>
                  <span className="text-xs sm:text-base font-black text-[#173C4B] leading-none">
                    24/7
                  </span>
                </div>
                <a
                  href={`tel:${HOSPITAL.phone}`}
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white flex items-center justify-center shadow-sm transition-transform hover:scale-105 shrink-0 ml-0.5 sm:ml-1"
                  aria-label={`Call emergency number ${HOSPITAL.phone}`}
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
