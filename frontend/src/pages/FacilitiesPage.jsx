import { Building2, Activity, Baby, BedDouble, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Badge } from '../components/ui/index'
import { useInView } from '../hooks/index'

const FACILITIES_LIST = [
  {
    name: 'Hospital Building & Exterior',
    desc: 'Modern multi-storey multispeciality medical facility on Salem Main Road, Krishnagiri with dedicated emergency bay and ambulance access.',
    image: '/images/facilities/hospital-exterior.jpg',
    icon: Building2,
  },
  {
    name: 'Main Reception & Helpdesk',
    desc: 'Comfortable waiting lounge, round-the-clock patient admission helpdesk, insurance coordination, and consultation desk.',
    image: '/images/facilities/hospital-reception.jpg',
    icon: Activity,
  },
  {
    name: 'Inpatient Corridors & Lift Lobby',
    desc: 'Hygienic, wide clinical corridors with patient elevator access connecting inpatient wards, ICUs, and consulting rooms.',
    image: '/images/facilities/hospital-interior.jpg',
    icon: BedDouble,
  },
  {
    name: 'Operation Theatre Complex',
    desc: 'Laminar airflow surgical suites with modern laparoscopic towers, advanced monitoring, and sterile infection-control protocols.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80',
    icon: Activity,
  },
  {
    name: 'Neonatal ICU (NICU)',
    desc: 'Specialized high-dependency baby warmers, phototherapy, and dedicated newborn resuscitation equipment for delicate infants.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80',
    icon: Baby,
  },
  {
    name: 'Private Deluxe Patient Rooms',
    desc: 'Comfortable air-conditioned private recovery rooms with attendant couches, nurse call systems, and attached amenities.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80',
    icon: BedDouble,
  },
  {
    name: '50-Bed General Inpatient Wards',
    desc: 'Hygienic, well-ventilated inpatient wards with round-the-clock nursing supervision and continuous vitals monitoring.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=700&q=80',
    icon: Users,
  },
  {
    name: 'Digital Diagnostic Imaging',
    desc: 'Low-dose digital X-ray, high-resolution ultrasonography, Doppler studies, and computerized pathology testing.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80',
    icon: Activity,
  },
]

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 sm:py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge variant="primary" className="mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Modern Infrastructure</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight text-center">
              Clean, Composed Spaces That <br />
              <span className="text-[#007C88]">Support Faster Recovery</span>
            </h1>
            <p className="mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-justify text-justify-center">
              50-bed hospital capacity designed with patient privacy, infection control protocols, and calm therapeutic spaces in Krishnagiri.
            </p>
          </div>
        </Container>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES_LIST.map((facility) => {
              const Icon = facility.icon
              return (
                <div
                  key={facility.name}
                  className="group rounded-3xl overflow-hidden border border-gray-100 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    <div className="hidden w-full h-full bg-[#07545B] p-6 flex-col justify-center items-center text-white text-center">
                      <Icon className="w-10 h-10 text-teal-200 mb-2" />
                      <span className="font-bold text-sm">{facility.name}</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-[#E6F5F6] text-[#007C88] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-extrabold text-[#173C4B]">
                        {facility.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A6568] leading-relaxed text-justify">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#007C88] to-[#680858] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Have Specific Inpatient or Admission Questions?
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 mb-6">
              Contact our patient admissions desk directly for room availability and tariff enquiries.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#173C4B] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-md active:scale-95"
            >
              <span>Contact Admissions Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
