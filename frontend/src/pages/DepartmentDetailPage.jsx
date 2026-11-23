import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Stethoscope, CalendarCheck, ClipboardList, MessageCircle, HeartHandshake, Phone } from 'lucide-react'
import { Container, Badge } from '../components/ui/index'
import { DEPARTMENTS, CARE_PATHWAY, HOSPITAL } from '../data/constants'

const pathwayIcons = [Stethoscope, ClipboardList, CalendarCheck, MessageCircle, HeartHandshake]

export default function DepartmentDetailPage() {
  const { slug } = useParams()
  const dept = DEPARTMENTS.find((d) => d.slug === slug)

  if (!dept) {
    return (
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-2xl font-extrabold text-[#173C4B] mb-3">Department Not Found</h1>
            <p className="text-sm text-[#4A6568] mb-6">The department requested does not exist or has been relocated.</p>
            <Link
              to="/departments"
              className="btn-teal inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>Back to Departments</span>
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 sm:py-16 md:py-20">
        <Container>
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#007C88] hover:text-[#07545B] mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Departments</span>
          </Link>

          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge variant="primary" className="mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Department Overview</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight text-center">
              {dept.name}
            </h1>

            <p className="mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-justify text-justify-center">
              {dept.description}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link
                to="/contact"
                className="btn-purple px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                <Phone className="w-4 h-4 text-white" />
                <span className="text-white font-bold">Enquire about {dept.name}</span>
              </Link>
              <a
                href={`tel:${HOSPITAL.phone}`}
                className="btn-purple-outline px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2"
              >
                <span>Emergency: {HOSPITAL.phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173C4B] mb-6">
              Department Procedures &amp; Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
              {dept.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#F9FBFC] border border-gray-100 hover:border-[#007C88]/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#007C88] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#173C4B]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Care Pathway */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F9FBFC]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173C4B]">
              Standard Care Pathway
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4A6568]">
              Your step-by-step journey from initial consultation to recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
            {CARE_PATHWAY.map((step, i) => {
              const Icon = pathwayIcons[i] || Stethoscope
              return (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl p-4 sm:p-5 text-center border border-gray-100 shadow-2xs flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E6F5F6] flex items-center justify-center text-[#007C88] mb-3 relative">
                    <Icon className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#007C88] text-white text-[0.65rem] font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#173C4B] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[0.7rem] sm:text-xs text-[#6B8A8D] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Action Footer */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#007C88] to-[#680858] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Consult with Our {dept.name} Team?
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 mb-6">
              Our specialists in Krishnagiri provide ethical, patient-friendly medical guidance.
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
