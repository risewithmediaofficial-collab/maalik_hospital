import {
  Award,
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  Baby,
  Sparkles,
  Phone,
  ShieldCheck,
  Microscope,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Badge, Card } from '../components/ui/index'
import { HOSPITAL, CORE_VALUES, LEADERSHIP } from '../data/constants'
import { useInView } from '../hooks/index'

function MissionVisionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
      {/* Vision */}
      <Card className="relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#E6F5F6]/70 pointer-events-none" />
        <div className="relative">
          <div className="w-12 h-12 rounded-2xl bg-[#E6F5F6] flex items-center justify-center mb-4 text-[#007C88]">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#173C4B] mb-1">
            Our Vision
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#007C88] mb-3">
            Care that earns lasting trust.
          </p>
          <p className="text-xs sm:text-sm text-[#4A6568] leading-relaxed text-justify">
            To become the most trusted multi-specialty healthcare institution in Tamil Nadu by providing world-class medical care with compassion, innovation, and excellence.
          </p>
        </div>
      </Card>

      {/* Mission */}
      <Card className="relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#EDF8F2]/70 pointer-events-none" />
        <div className="relative">
          <div className="w-12 h-12 rounded-2xl bg-[#EDF8F2] flex items-center justify-center mb-4 text-[#4B9B75]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#173C4B] mb-1">
            Our Mission
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#4B9B75] mb-3">
            Excellence in every act of care.
          </p>
          <ul className="space-y-2.5">
            {[
              'Deliver evidence-based, affordable healthcare.',
              'Treat every patient with dignity, empathy, and respect.',
              'Embrace the latest medical technology and diagnostic precision.',
              'Promote preventive healthcare and community wellness.',
              'Maintain the highest standards of clinical patient safety.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A6568]">
                <CheckCircle2 className="w-4 h-4 text-[#4B9B75] mt-0.5 shrink-0" />
                <span className="text-justify">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 sm:py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge variant="primary" className="mb-3">
              <Award className="w-3.5 h-3.5 text-[#007C88]" />
              <span>About Our Hospital</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight text-center">
              Healthcare Designed Around <br />
              <span className="text-[#007C88]">Confidence &amp; Comfort</span>
            </h1>
            <p className="mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-justify text-justify-center">
              Malik Life Care Hospital brings together multi-speciality disciplines, advanced diagnostic machinery, 50-bed care capacity, and thoughtfully designed patient spaces in Krishnagiri.
            </p>
          </div>
        </Container>
      </section>

      {/* Hospital Campus Showcase */}
      <section className="relative -mt-6 sm:-mt-10 mb-6 sm:mb-10 z-10">
        <Container>
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl border-4 border-white aspect-[16/9] sm:aspect-[21/9] max-h-[420px] max-w-5xl mx-auto">
            <img
              src="/images/facilities/hospital-exterior.jpg"
              alt="Malik Life Care Hospital and VAARIS Fertility & IVF Krishnagiri Campus"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C4B]/85 via-[#173C4B]/20 to-transparent flex items-end p-5 sm:p-8">
              <div className="text-white max-w-2xl">
                <span className="inline-block bg-[#007C88] text-white text-xs font-bold px-3 py-1 rounded-full mb-1.5 shadow-xs">
                  Salem Main Road · Krishnagiri
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold text-white">
                  Malik Life Care Hospital &amp; VAARIS Fertility Centre
                </h3>
                <p className="text-xs sm:text-sm text-teal-100 hidden sm:block mt-0.5">
                  50-Bed Capacity · 24/7 Emergency &amp; Trauma Support · Advanced Surgical Theatres
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Care Promise & Mission Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-12">
            <Badge variant="vaaris" className="mb-3">
              <Heart className="w-3.5 h-3.5 text-[#680858]" />
              <span>Our Care Promise</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173C4B] leading-tight text-center">
              Dependable Healthcare in an <br className="hidden sm:inline" />
              <span className="text-[#680858]">Ethical Environment</span>
            </h2>
            <p className="mt-3 text-[#4A6568] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-justify text-justify-center">
              To deliver dependable healthcare in an ethical, transparent, and patient-friendly environment supported by competent medical professionals and compassionate care teams around the clock.
            </p>
          </div>

          <MissionVisionSection />
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F9FBFC]">
        <Container>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
            <Badge variant="primary" className="mb-3">
              <Users className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Hospital Leadership</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173C4B] text-center">
              Guided by Experienced Clinical Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6">
            {LEADERSHIP.map((leader) => (
              <Card key={leader.name} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#E6F5F6] border-2 border-[#007C88] overflow-hidden flex items-center justify-center mb-4 text-[#007C88] shadow-xs">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextElementSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className={`${leader.image ? 'hidden' : 'flex'} w-full h-full items-center justify-center`}>
                    <Users className="w-9 h-9 sm:w-10 sm:h-10" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#173C4B]">
                  {leader.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#007C88] font-bold mt-0.5">
                  {leader.designation}
                </p>
                <p className="text-xs text-[#6B8A8D] mt-1 font-medium">
                  {leader.speciality}
                </p>
              </Card>
            ))}
          </div>

          {/* Founder Quote Card */}
          <div className="mt-10 sm:mt-12 max-w-2xl mx-auto text-center bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-2xs">
            <p className="text-sm sm:text-base md:text-lg text-[#364B4D] italic leading-relaxed text-justify text-justify-center">
              "Every patient is family. Every life deserves compassion, dignity, and the very best care. Inspired by our father, K. Abdul Malik, healing begins with kindness and honesty."
            </p>
            <p className="mt-3 text-xs sm:text-sm font-extrabold text-[#173C4B] text-center">
              In Loving Memory of K. Abdul Malik
            </p>
          </div>
        </Container>
      </section>

      {/* VAARIS Fertility & IVF Centre Section */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#FAF7FA]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: VAARIS Brand Artwork & Leadership Card (Span 5) */}
            <div className="lg:col-span-5">
              <div className="rounded-[32px] bg-white p-6 sm:p-8 flex flex-col items-center text-center">
                {/* Original VAARIS Logo with NO extra background container */}
                <img
                  src="/images/vaaris logo.jpeg"
                  alt="VAARIS Fertility & IVF Centre"
                  className="w-28 h-28 sm:w-36 sm:h-36 object-contain mb-3"
                />

                <div className="inline-block bg-[#F5EEF4] text-[#680858] text-xs font-bold px-3.5 py-1 rounded-full mb-2">
                  Specialised Unit of Malik Life Care Hospital
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#173C4B]">
                  VAARIS Fertility &amp; IVF
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#800060] mt-1">
                  Centre for Reproductive Medicine &amp; Advanced Maternity
                </p>

                {/* Lead Doctor Card */}
                <div className="mt-6 w-full p-4 rounded-2xl bg-[#FAF7FA] flex items-center gap-3 text-left">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-white">
                    <img
                      src="/images/doctors/dr.thasleem.png"
                      alt="Dr. Z. Thasleem"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="block text-[0.65rem] font-bold text-[#680858] uppercase tracking-wider">
                      Clinical Director
                    </span>
                    <h4 className="text-sm font-extrabold text-[#173C4B] leading-tight">
                      Dr. Z. Thasleem
                    </h4>
                    <p className="text-[0.7rem] text-[#6B8A8D]">
                      Obstetrics, Gynaecology &amp; Reproductive Medicine
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-[#4A6568] leading-relaxed text-justify">
                  Located within the Malik Life Care Hospital campus on Salem Main Road, Krishnagiri with 24/7 continuous inpatient and NICU support.
                </p>
              </div>
            </div>

            {/* Right Column: Mission, Key Treatments & Why Choose (Span 7) */}
            <div className="lg:col-span-7">
              <div className="inline-block bg-[#F5EEF4] text-[#680858] font-bold text-xs px-3.5 py-1.5 rounded-full mb-3">
                About VAARIS Fertility
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight">
                Empowering Parenthood with <br className="hidden sm:inline" />
                <span className="text-[#680858]">Advanced Science &amp; Compassion</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#4A6568] leading-relaxed text-justify">
                VAARIS Fertility &amp; IVF Centre is established to make world-class reproductive medicine accessible, transparent, and empathetic for aspiring parents across Krishnagiri, Dharmapuri, Salem, and surrounding regions.
              </p>

              {/* 4 Service Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-4 rounded-2xl bg-white">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EEF4] text-[#680858] flex items-center justify-center font-bold mb-2.5">
                    <Baby className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#173C4B]">
                    IVF &amp; ICSI Procedures
                  </h4>
                  <p className="text-xs text-[#6B8A8D] mt-1 leading-relaxed text-justify">
                    Advanced embryology cleanroom, blastocyst transfer, and intracytoplasmic sperm injection.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EEF4] text-[#680858] flex items-center justify-center font-bold mb-2.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#173C4B]">
                    IUI &amp; Ovulation Tracking
                  </h4>
                  <p className="text-xs text-[#6B8A8D] mt-1 leading-relaxed text-justify">
                    Personalized follicular tracking, hormone optimization, and washed semen intrauterine insemination.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EEF4] text-[#680858] flex items-center justify-center font-bold mb-2.5">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#173C4B]">
                    Fertility Workup &amp; Diagnostics
                  </h4>
                  <p className="text-xs text-[#6B8A8D] mt-1 leading-relaxed text-justify">
                    Computerized semen analysis, ovarian reserve assessment (AMH), and pelvic ultrasound Doppler.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white">
                  <div className="w-9 h-9 rounded-xl bg-[#F5EEF4] text-[#680858] flex items-center justify-center font-bold mb-2.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#173C4B]">
                    High-Risk Maternity Care
                  </h4>
                  <p className="text-xs text-[#6B8A8D] mt-1 leading-relaxed text-justify">
                    Seamless continuum from conception to safe painless delivery and on-site neonatal intensive care (NICU).
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="btn-purple px-7 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Enquire at Fertility Desk</span>
                </Link>
                <a
                  href={`tel:${HOSPITAL.phone}`}
                  className="btn-purple-outline px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2"
                >
                  <span>Helpline: {HOSPITAL.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#007C88] to-[#680858] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 mb-6">
              Consult with our specialists or explore our 50-bed inpatient care in Krishnagiri.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#173C4B] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-md active:scale-95"
            >
              <span>Contact Our Hospital</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
