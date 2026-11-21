import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowRight, Heart } from 'lucide-react'
import { HOSPITAL, DEPARTMENTS } from '../../data/constants'
import { Container } from '../ui/index'
import { MalikLogo, VaarisLogo } from '../common/BrandLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Doctors', path: '/doctors' },
    { label: 'Departments', path: '/departments' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ]

  const patientLinks = [
    { label: 'Patient Video Stories', path: '/testimonials' },
    { label: 'Book Lab Test', path: '/lab-diagnostics' },
    { label: 'Specialist Doctors', path: '/doctors' },
    { label: 'Health Blog', path: '/blog' },
    { label: 'Emergency Support 24/7', path: '/contact' },
  ]

  const topDepartments = DEPARTMENTS.slice(0, 6)

  return (
    <footer className="bg-[#0D242D] text-white">
      {/* Pre-Footer Action Banner */}
      <div className="bg-gradient-to-r from-[#007C88] via-[#07545B] to-[#680858] py-8 md:py-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Need Immediate Medical Assistance?
              </h3>
              <p className="mt-1 text-teal-100 text-sm md:text-base">
                Our priority emergency teams and specialists are on standby 24/7 in Krishnagiri.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#173C4B] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-md active:scale-95 text-center"
              >
                Contact Hospital Desk
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${HOSPITAL.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all shadow-md active:scale-95 text-center"
              >
                <Phone className="w-4 h-4" />
                Emergency Call: {HOSPITAL.phone}
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column (Span 4) */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-4">
                <MalikLogo light={true} size="large" />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Premium, patient-first multispeciality hospital in Krishnagiri. 50-bed modern facility built around ethical treatment, advanced diagnostics, and compassionate family care.
              </p>

              {/* VAARIS Co-Brand Card */}
              <div className="bg-white/5 rounded-2xl p-4 mb-6">
                <VaarisLogo light={true} />
                <p className="text-xs text-purple-200/80 mt-2">
                  Specialized Centre for Advanced Fertility, Reproductive Medicine &amp; IVF.
                </p>
              </div>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#80cdd2] shrink-0 mt-1" />
                  <span>{HOSPITAL.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#80cdd2] shrink-0" />
                  <a href={`tel:${HOSPITAL.phone}`} className="hover:text-white transition-colors">
                    {HOSPITAL.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#80cdd2] shrink-0" />
                  <a href={`mailto:${HOSPITAL.email}`} className="hover:text-white transition-colors">
                    {HOSPITAL.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300 font-semibold">24/7 Emergency &amp; Trauma Standby</span>
                </div>
              </div>
            </div>

            {/* Quick Links (Span 2) */}
            <div className="lg:col-span-2">
              <h4 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-teal-400">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[#007C88]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Patient Services (Span 3) */}
            <div className="lg:col-span-3">
              <h4 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-teal-400">
                Patient Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                {patientLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[#007C88]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialities (Span 3) */}
            <div className="lg:col-span-3">
              <h4 className="text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-teal-400">
                Specialities
              </h4>
              <ul className="space-y-2.5 text-sm">
                {topDepartments.map((dept) => (
                  <li key={dept.slug}>
                    <Link
                      to={`/departments/${dept.slug}`}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-[#007C88]" />
                      {dept.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/departments"
                    className="text-[#80cdd2] hover:text-white transition-colors font-semibold text-xs mt-2 inline-block"
                  >
                    View All 11 Speciality Departments →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 py-5 bg-[#091B22]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <p>© {currentYear} Malik Life Care Hospital, Krishnagiri. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Developed for Malik Life Care Hospital with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
