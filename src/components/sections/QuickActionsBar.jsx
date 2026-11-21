import { Link } from 'react-router-dom'
import { Stethoscope, FlaskConical, BedDouble, MapPin } from 'lucide-react'
import { Container } from '../ui/index'

const QUICK_ACTIONS = [
  {
    label: 'Find a Doctor',
    path: '/doctors',
    icon: Stethoscope,
    bgColor: 'bg-[#EBF7F8]',
    textColor: 'text-[#007C88]',
    hoverBg: 'group-hover:bg-[#007C88] group-hover:text-white',
  },
  {
    label: 'Book Lab Test',
    path: '/lab-diagnostics',
    icon: FlaskConical,
    bgColor: 'bg-[#F9ECF7]',
    textColor: 'text-[#680858]',
    hoverBg: 'group-hover:bg-[#680858] group-hover:text-white',
  },
  {
    label: 'Our Facilities',
    path: '/facilities',
    icon: BedDouble,
    bgColor: 'bg-[#EBF7F8]',
    textColor: 'text-[#007C88]',
    hoverBg: 'group-hover:bg-[#007C88] group-hover:text-white',
  },
  {
    label: 'Hospital Location',
    path: '/contact',
    icon: MapPin,
    bgColor: 'bg-[#EDF8F2]',
    textColor: 'text-[#4B9B75]',
    hoverBg: 'group-hover:bg-[#4B9B75] group-hover:text-white',
  },
]

export default function QuickActionsBar() {
  return (
    <section className="relative -mt-6 sm:-mt-8 z-20">
      <Container>
        <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_12px_40px_rgba(0,124,136,0.08)] border border-gray-100 p-3 sm:p-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {QUICK_ACTIONS.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className="group flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-2xl hover:bg-gray-50/90 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${item.bgColor} ${item.textColor} ${item.hoverBg} flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xs mb-2`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#173C4B] group-hover:text-[#007C88] transition-colors leading-tight">
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
