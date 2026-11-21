import { Image, Building2, Eye, ShieldCheck } from 'lucide-react'
import { Container, Badge } from '../components/ui/index'
import { FACILITIES } from '../data/constants'
import { useInView } from '../hooks/index'

export default function GalleryPage() {
  const [heroRef, heroInView] = useInView()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 sm:py-16 md:py-20" ref={heroRef}>
        <Container>
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Badge variant="primary" className="mb-3">
              <Image className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Hospital Gallery</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight">
              A Look Inside <br />
              <span className="text-[#007C88]">Malik Life Care Hospital</span>
            </h1>
            <p className="mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Real views of our 50-bed Krishnagiri hospital facility, modern reception, patient wings, surgical suites, and specialized clinics.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="group relative rounded-3xl overflow-hidden shadow-2xs hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextElementSibling.style.display = 'flex'
                    }}
                  />

                  {/* Fallback */}
                  <div className="hidden w-full h-full bg-[#07545B] p-6 flex-col justify-center items-center text-white text-center">
                    <Building2 className="w-10 h-10 text-teal-200 mb-2" />
                    <span className="font-bold text-sm">{item.name}</span>
                  </div>

                  {/* Category Pill Tag */}
                  {item.category && (
                    <div className="absolute top-3 left-3 bg-[#173C4B]/80 backdrop-blur-md text-white text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </div>
                  )}
                </div>

                {/* Caption Bar */}
                <div className="p-4 sm:p-5 border-t border-gray-100">
                  <h3 className="text-base font-extrabold text-[#173C4B] group-hover:text-[#007C88] transition-colors">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-xs text-[#6B8A8D] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
