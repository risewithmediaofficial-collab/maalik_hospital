import { Link } from 'react-router-dom'
import {
  Building2,
  Activity,
  Baby,
  BedDouble,
  Users,
  ArrowRight,
} from 'lucide-react'
import { Container } from '../ui/index'
import { useInView } from '../../hooks/index'

const FACILITIES_DATA = [
  {
    name: 'Hospital Building',
    icon: Building2,
    iconBg: 'bg-[#EBF7F8] text-[#007C88]',
    image: '/images/facilities/hospital-exterior.jpg',
    fallbackBg: 'bg-gradient-to-tr from-teal-900 to-slate-800',
  },
  {
    name: 'Reception & Helpdesk',
    icon: Activity,
    iconBg: 'bg-[#F9ECF7] text-[#680858]',
    image: '/images/facilities/hospital-reception.jpg',
    fallbackBg: 'bg-gradient-to-tr from-purple-900 to-slate-800',
  },
  {
    name: 'Inpatient Hallway & Lift',
    icon: BedDouble,
    iconBg: 'bg-[#EBF7F8] text-[#007C88]',
    image: '/images/facilities/hospital-interior.jpg',
    fallbackBg: 'bg-gradient-to-tr from-teal-900 to-slate-800',
  },
  {
    name: 'Operation Theatre',
    icon: Baby,
    iconBg: 'bg-[#F9ECF7] text-[#680858]',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80',
    fallbackBg: 'bg-gradient-to-tr from-purple-900 to-slate-800',
  },
]

export default function FacilitiesSection() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-16 md:py-20 bg-[#F9FBFC]" ref={ref}>
      <Container>
        {/* Header with Title and Arrow */}
        <div
          className={`flex items-end justify-between gap-4 mb-8 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="inline-block bg-[#F7EBF5] text-[#680858] font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
              Our Facilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight">
              Modern Spaces for Better Care
            </h2>
          </div>

          <Link
            to="/facilities"
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#173C4B] hover:text-[#007C88] hover:border-[#007C88] shadow-xs transition-colors shrink-0"
            aria-label="View all facilities"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FACILITIES_DATA.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className="group relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />

                {/* Fallback Graphic */}
                <div
                  className={`hidden w-full h-full ${item.fallbackBg} p-6 flex-col justify-center items-center text-center text-white`}
                >
                  <Building2 className="w-10 h-10 text-white/70 mb-2" />
                  <span className="font-bold text-sm">{item.name}</span>
                </div>

                {/* Bottom Floating Pill Tag with Icon & Label (from MedixWeb screenshot) */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-center">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-white/60 flex items-center gap-2 max-w-full">
                    <div
                      className={`w-6 h-6 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-[#173C4B] truncate">
                      {item.name}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
