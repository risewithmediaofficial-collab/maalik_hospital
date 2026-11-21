import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Bone,
  Baby,
  Smile,
  ShieldPlus,
  Scissors,
  Ear,
  Wind,
  HeartPulse,
  Activity,
  Pill,
  ScanLine,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import { Container } from '../ui/index'
import { useInView } from '../../hooks/index'

const DEPT_CARDS = [
  {
    name: 'Orthopaedics',
    slug: 'orthopaedics',
    icon: Bone,
    circleBg: 'bg-[#EBF7F8]',
    iconColor: 'text-[#007C88]',
    borderHover: 'hover:border-[#007C88]/40',
  },
  {
    name: 'Obstetrics & Gynaecology',
    slug: 'obstetrics-gynaecology',
    icon: Baby,
    circleBg: 'bg-[#FBF0F8]',
    iconColor: 'text-[#800060]',
    borderHover: 'hover:border-[#800060]/40',
  },
  {
    name: 'Paediatrics',
    slug: 'paediatrics',
    icon: Smile,
    circleBg: 'bg-[#EDF8F2]',
    iconColor: 'text-[#4B9B75]',
    borderHover: 'hover:border-[#4B9B75]/40',
  },
  {
    name: 'General Medicine',
    slug: 'general-medicine',
    icon: ShieldPlus,
    circleBg: 'bg-[#EBF7F8]',
    iconColor: 'text-[#007C88]',
    borderHover: 'hover:border-[#007C88]/40',
  },
  {
    name: 'General Surgery',
    slug: 'general-surgery',
    icon: Scissors,
    circleBg: 'bg-[#EDF5FB]',
    iconColor: 'text-[#0284C7]',
    borderHover: 'hover:border-[#0284C7]/40',
  },
  {
    name: 'ENT',
    slug: 'ent',
    icon: Ear,
    circleBg: 'bg-[#F0F7FB]',
    iconColor: 'text-[#0284C7]',
    borderHover: 'hover:border-[#0284C7]/40',
  },
  {
    name: 'Pulmonology',
    slug: 'pulmonology',
    icon: Wind,
    circleBg: 'bg-[#F6EEF8]',
    iconColor: 'text-[#7C3AED]',
    borderHover: 'hover:border-[#7C3AED]/40',
  },
  {
    name: 'Cardiology',
    slug: 'cardiology',
    icon: HeartPulse,
    circleBg: 'bg-[#FDE8E8]',
    iconColor: 'text-[#E11D48]',
    borderHover: 'hover:border-[#E11D48]/40',
  },
  {
    name: 'Radiology',
    slug: 'radiology',
    icon: ScanLine,
    circleBg: 'bg-[#EBF7F8]',
    iconColor: 'text-[#007C88]',
    borderHover: 'hover:border-[#007C88]/40',
  },
  {
    name: 'Urology',
    slug: 'urology',
    icon: Activity,
    circleBg: 'bg-[#FDF0F9]',
    iconColor: 'text-[#680858]',
    borderHover: 'hover:border-[#680858]/40',
  },
  {
    name: 'Gastroenterology',
    slug: 'gastroenterology',
    icon: Pill,
    circleBg: 'bg-[#EDF8F2]',
    iconColor: 'text-[#4B9B75]',
    borderHover: 'hover:border-[#4B9B75]/40',
  },
]

export default function DepartmentsSection() {
  const [ref, isInView] = useInView()
  const [startIndex, setStartIndex] = useState(0)
  const pageSize = 8

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(DEPT_CARDS.length - pageSize, prev + 1))
  }

  const visibleCards = DEPT_CARDS.slice(startIndex, startIndex + pageSize)

  return (
    <section className="py-16 md:py-20 bg-[#F9FBFC]" ref={ref}>
      <Container>
        {/* Header with Title and Carousel Navigation */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            {/* Soft Purple Badge as in screenshot */}
            <div className="inline-block bg-[#F7EBF5] text-[#680858] font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
              Our Specialities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight">
              Comprehensive Care <br className="hidden sm:inline" />
              Across 11 Departments
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#680858] hover:bg-[#F7EBF5] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
              aria-label="Previous departments"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= DEPT_CARDS.length - pageSize}
              className="w-10 h-10 rounded-full bg-[#680858] text-white flex items-center justify-center hover:bg-[#800060] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
              aria-label="Next departments"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8 Department Cards Grid (matching screenshot layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {visibleCards.map((dept) => {
            const Icon = dept.icon
            return (
              <Link
                key={dept.name}
                to={`/departments/${dept.slug}`}
                className={`group bg-white rounded-2xl p-3 sm:p-5 text-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-between min-h-[130px] sm:min-h-[160px] ${dept.borderHover}`}
              >
                {/* Circular Icon with Pastel Background */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${dept.circleBg} ${dept.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-3`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                </div>

                {/* Department Name */}
                <span className="text-xs sm:text-xs font-bold text-[#173C4B] group-hover:text-[#007C88] transition-colors leading-tight line-clamp-2">
                  {dept.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* View All Departments Link */}
        <div className="mt-8 text-center">
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#007C88] hover:text-[#07545B] transition-colors"
          >
            <span>Explore Details of All 11 Speciality Departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
