import { Link } from 'react-router-dom'
import { FlaskConical, ArrowRight, Search, Calendar, Clock, ClipboardCheck, UserCheck } from 'lucide-react'
import { Container, Badge } from '../ui/index'
import { useInView } from '../../hooks/index'

const steps = [
  { icon: Search, title: 'Test Selection', desc: 'Search and choose from 30+ diagnostic investigations.' },
  { icon: ClipboardCheck, title: 'Preparation Guide', desc: 'Clear fasting and pre-test instructions provided.' },
  { icon: Calendar, title: 'Choose Date', desc: 'Pick your preferred date according to convenience.' },
  { icon: Clock, title: 'Select Time Slot', desc: 'Choose a dedicated 30-minute diagnostic slot.' },
  { icon: UserCheck, title: 'Instant Booking', desc: 'Receive prompt SMS & WhatsApp confirmation.' },
]

export default function DiagnosticsSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-[#E6F5F6]/40 via-white to-[#F7EBF5]/30">
      <Container>
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
          <Badge variant="primary" className="mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-[#007C88]" />
            <span>Lab &amp; Diagnostics</span>
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight text-center">
            Book Lab Tests with <span className="text-[#007C88]">Real-Time Slots</span>
          </h2>
          <p className="mt-3 text-[#4A6568] text-sm sm:text-base max-w-xl mx-auto text-justify text-justify-center leading-relaxed">
            Accurate, reliable diagnostics supported by advanced digital machinery with same-day report delivery.
          </p>
        </div>

        {/* 5-Step Process Grid (Responsive for mobile, tablet, and desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative bg-white rounded-2xl p-4 sm:p-5 text-center border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#E6F5F6] flex items-center justify-center mb-3 text-[#007C88] shadow-2xs">
                <Icon className="w-5 h-5" />
              </div>
              <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#007C88] text-white text-[0.65rem] font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-[#173C4B] mb-1">
                {title}
              </h3>
              <p className="text-[0.7rem] sm:text-xs text-[#6B8A8D] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link
            to="/lab-diagnostics"
            className="btn-purple inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg active:scale-95"
          >
            <FlaskConical className="w-4 h-4 text-white" />
            <span className="text-white font-bold">Book Lab Test Online</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
