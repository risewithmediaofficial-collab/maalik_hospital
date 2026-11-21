import { Users, Search, ArrowRight, UserCheck } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Badge, Card } from '../components/ui/index'
import { LEADERSHIP } from '../data/constants'

const ALL_DOCTORS = [
  ...LEADERSHIP,
  {
    name: 'Dr. R. Natarajan',
    designation: 'Senior Consultant',
    speciality: 'General Medicine',
    role: 'MBBS, MD (Gen Med)',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. K. Senthil Kumar',
    designation: 'Senior Consultant',
    speciality: 'General Surgery & Laparoscopy',
    role: 'MS (Gen Surg), FMAS',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. M. Deepa',
    designation: 'Consultant',
    speciality: 'Paediatrics & Neonatology',
    role: 'MD (Paediatrics), DNB',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. P. Rajesh',
    designation: 'Consultant',
    speciality: 'ENT & Head Neck Surgery',
    role: 'MS (ENT), DLO',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. S. Venkat',
    designation: 'Consultant',
    speciality: 'Radiology & Imaging',
    role: 'MD (Radiology)',
    image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. A. Anand',
    designation: 'Consultant',
    speciality: 'Cardiology',
    role: 'MD, DM (Cardio)',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
  },
]

export default function DoctorsPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  const filtered = ALL_DOCTORS.filter((d) => {
    const matchSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.speciality.toLowerCase().includes(search.toLowerCase())
    const matchFilter = !filter || d.speciality === filter
    return matchSearch && matchFilter
  })

  const specialities = [...new Set(ALL_DOCTORS.map((d) => d.speciality))]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 sm:py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge variant="primary" className="mb-3">
              <Users className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Medical Directory</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight text-center">
              Specialists You Can Trust <br />
              <span className="text-[#007C88]">Across Every Stage of Care</span>
            </h1>
            <p className="mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-justify text-justify-center">
              Find our qualified doctors and specialist consultants in Krishnagiri. Consultations available daily. Contact our desk for availability.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <Container>
          <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by doctor name or speciality..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 text-[#173C4B]"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-[#173C4B] focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 bg-white"
            >
              <option value="">All Specialities</option>
              {specialities.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </Container>
      </section>

      {/* Doctor Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F9FBFC]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((doctor, i) => (
              <Card key={`${doctor.name}-${i}`} className="flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#E6F5F6] border-2 border-[#007C88] overflow-hidden flex items-center justify-center mb-4 text-[#007C88] shadow-xs">
                    {doctor.image ? (
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextElementSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div className={`${doctor.image ? 'hidden' : 'flex'} w-full h-full items-center justify-center`}>
                      <UserCheck className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#173C4B] text-center leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#007C88] font-bold text-center mt-0.5">
                    {doctor.speciality}
                  </p>
                  <p className="text-xs text-[#6B8A8D] text-center mt-1">
                    {doctor.role}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className="btn-purple w-full py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Contact Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-[#6B8A8D]">
                No doctors matched your search criteria. Try a different term or clear filters.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
