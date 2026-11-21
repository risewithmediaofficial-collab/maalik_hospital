import { Link } from 'react-router-dom'
import {
  Bone, Baby, Stethoscope, Scissors, Ear, ScanLine,
  Activity, Pill, Wind, HeartPulse, ArrowRight, Layers
} from 'lucide-react'
import { Container, Badge } from '../components/ui/index'
import { DEPARTMENTS } from '../data/constants'
import { useInView } from '../hooks/index'

const iconMap = {
  Bone, Baby, Stethoscope, Scissors, Ear, ScanLine,
  Activity, Pill, Wind, HeartPulse,
}

export default function DepartmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 sm:py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge variant="primary" className="mb-3">
              <Layers className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Speciality Care</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight text-center">
              Comprehensive Care Across <br />
              <span className="text-[#007C88]">{DEPARTMENTS.length} Clinical Departments</span>
            </h1>
            <p className="mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-justify text-justify-center">
              Led by veteran specialist consultants equipped with high-precision diagnostics and round-the-clock emergency care.
            </p>
          </div>
        </Container>
      </section>

      {/* Department Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {DEPARTMENTS.map((dept) => {
              const Icon = iconMap[dept.icon] || Stethoscope
              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.slug}`}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xs hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#007C88]/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#E6F5F6] group-hover:bg-[#007C88] flex items-center justify-center transition-all duration-300 shrink-0">
                        <Icon className="w-6 h-6 text-[#007C88] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#173C4B] group-hover:text-[#007C88] transition-colors leading-tight">
                        {dept.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4A6568] leading-relaxed mb-4 text-justify">
                      {dept.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {dept.services.slice(0, 3).map((s) => (
                        <span key={s} className="text-[0.7rem] bg-[#F4F7F7] text-[#364B4D] font-medium px-2.5 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#007C88] group-hover:text-[#07545B] pt-3 border-t border-gray-100">
                    <span>View Department Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#007C88] via-[#07545B] to-[#680858] text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Need a Specialist Consultation?
            </h2>
            <p className="text-sm text-teal-100 mb-6">
              Book an appointment with our consultant doctors in Krishnagiri.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#173C4B] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-md active:scale-95"
            >
              <span>Contact Hospital Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
