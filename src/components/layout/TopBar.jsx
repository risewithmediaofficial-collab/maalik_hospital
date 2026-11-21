import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { HOSPITAL } from '../../data/constants'

export default function TopBar() {
  return (
    <div className="bg-[#07545B] text-white text-xs py-2 border-b border-[#053e43]">
      <div className="section-container flex items-center justify-between gap-4">
        {/* Left: Contact Info (Hidden on tiny mobile, visible sm+) */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-6">
          <a
            href={`tel:${HOSPITAL.phone}`}
            className="flex items-center gap-1.5 hover:text-teal-200 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-teal-300" />
            <span>{HOSPITAL.phone}</span>
          </a>
          <a
            href={`mailto:${HOSPITAL.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-teal-200 transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-teal-300" />
            <span>{HOSPITAL.email}</span>
          </a>
        </div>

        {/* Center: Live 24/7 Emergency Indicator */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex rounded-full h-2 w-2 bg-red-400" />
          <span className="font-bold tracking-wide text-xs">
            Emergency Support Available 24/7
          </span>
        </div>

        {/* Right: Hospital Location & Hours */}
        <div className="hidden lg:flex items-center gap-5 text-teal-100 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-300" />
            <span>Open 24 Hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-300" />
            <span>{HOSPITAL.city}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
