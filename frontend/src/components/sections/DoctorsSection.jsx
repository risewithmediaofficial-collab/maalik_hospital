import { Link } from 'react-router-dom'
import { ArrowRight, UserCheck } from 'lucide-react'
import { Container } from '../ui/index'
import { useInView } from '../../hooks/index'

const DOCTORS = [
  {
    name: 'Dr. Ismail Malik',
    speciality: 'Trauma & Joint Replacement',
    role: 'Director & Specialist Consultant',
    image: '/images/doctors/dr.malik.png',
    fallbackBg: 'bg-gradient-to-tr from-sky-100 to-teal-50',
  },
  {
    name: 'Dr. Z. Thasleem',
    speciality: 'Obstetrics & Gynaecology',
    role: 'Co-Director & Specialist Consultant',
    image: '/images/doctors/dr.thasleem.png',
    fallbackBg: 'bg-gradient-to-tr from-purple-100 to-pink-50',
  },
]

export default function DoctorsSection() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <Container>
        <div
          className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column: Heading, Subtext, and CTA Button */}
          <div className="lg:col-span-4 text-center lg:text-left">
            {/* Soft Purple Badge */}
            <div className="inline-block bg-[#F7EBF5] text-[#680858] font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
              Our Doctors
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight">
              Meet Our <br className="hidden lg:inline" />
              Expert Team
            </h2>

            <p className="mt-4 text-[#4A6568] text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Experienced specialists dedicated to your health and well-being.
            </p>

            <div className="mt-6">
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 bg-[#680858] hover:bg-[#800060] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>View All Doctors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2 Doctor Profile Cards side by side */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5 sm:gap-6">
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.name}
                className="group relative bg-[#F7FBFB] rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300"
              >
                {/* Doctor Portrait Header */}
                <div
                  className={`aspect-[4/4.5] relative overflow-hidden ${doctor.fallbackBg}`}
                >
                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.speciality}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback Vector Card */}
                  <div className="hidden w-full h-full p-6 flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white/80 shadow-md flex items-center justify-center text-[#007C88] mb-3">
                      <UserCheck className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-[#173C4B] text-base">
                      {doctor.name}
                    </span>
                    <span className="text-xs text-[#007C88]">
                      {doctor.role}
                    </span>
                  </div>
                </div>

                {/* Bottom Bar: Name, Speciality, and Right Circular Arrow */}
                <div className="bg-white p-4 sm:p-5 flex items-center justify-between border-t border-gray-100">
                  <div>
                    <h3 className="text-base font-extrabold text-[#173C4B] group-hover:text-[#007C88] transition-colors leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-[#6B8A8D] font-medium mt-0.5">
                      {doctor.speciality}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-[#680858] text-[#173C4B] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0 shadow-xs"
                    aria-label={`Contact doctor ${doctor.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
