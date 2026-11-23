import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from 'lucide-react'
import { Container, Badge } from '../ui/index'
import { HOSPITAL } from '../../data/constants'
import { useInView } from '../../hooks/index'

export default function LocationSection() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white" ref={ref}>
      <Container>
        <div
          className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact & Hours Info (Order 1 on mobile, Order 1 on desktop) */}
          <div className="order-1 lg:order-1 lg:col-span-6 text-left">
            <Badge variant="primary" className="mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Hospital Location</span>
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight">
              Easy to Reach, <br />
              <span className="text-[#007C88]">Always Here for You</span>
            </h2>

            <p className="mt-3 text-[#4A6568] text-sm sm:text-base leading-relaxed max-w-xl pr-12 sm:pr-0">
              Centrally located on Salem Main Road, Krishnagiri with 24/7 dedicated ambulance access and spacious parking.
            </p>

            <div className="mt-6 space-y-3.5">
              {/* Address */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#F9FBFC] border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#E6F5F6] flex items-center justify-center text-[#007C88] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#173C4B]">
                    Hospital Address
                  </h4>
                  <p className="text-xs text-[#4A6568] mt-0.5 leading-relaxed">
                    {HOSPITAL.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#F9FBFC] border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#EDF8F2] flex items-center justify-center text-[#4B9B75] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#173C4B]">
                    Reception &amp; Consultation Line
                  </h4>
                  <a
                    href={`tel:${HOSPITAL.phone}`}
                    className="text-xs sm:text-sm font-bold text-[#007C88] hover:text-[#07545B] mt-0.5 inline-block"
                  >
                    {HOSPITAL.phone}
                  </a>
                </div>
              </div>

              {/* Emergency */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-red-50/70 border border-red-100">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-red-700">
                    24/7 Emergency &amp; Trauma Care
                  </h4>
                  <p className="text-xs text-red-600/90 mt-0.5">
                    Priority medical emergency staff on standby round the clock.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Preview Container (Order 2 on mobile, Order 2 on desktop) */}
          <div className="order-2 lg:order-2 lg:col-span-6 rounded-3xl overflow-hidden bg-gradient-to-tr from-teal-50 to-slate-100 border-4 border-white shadow-xl min-h-[330px] sm:min-h-0 sm:aspect-[4/3] relative flex items-center justify-center p-6 sm:p-8 text-center">
            {/* Map Pin Mockup with Real Google Maps Redirection */}
            <div className="max-w-md w-full flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E6F5F6] text-[#007C88] flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm animate-bounce">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#173C4B] mb-2">
                Malik Life Care Hospital
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6568] mb-5 leading-relaxed max-w-xs sm:max-w-md mx-auto">
                254, Salem Main Road, Near TCR Circle, Thiruvalluvar Nagar,
                Krishnagiri, Tamil Nadu – 635001
              </p>
              <a
                href={HOSPITAL.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
