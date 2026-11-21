import { Heart, Users, Quote } from 'lucide-react'
import { Container, Badge } from '../ui/index'
import { useInView } from '../../hooks/index'

export default function FounderSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-br from-[#E6F5F6]/40 via-white to-[#F7EBF5]/40">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <Badge variant="accent" className="mb-4">
            <Heart className="w-3.5 h-3.5 text-[#A88D36]" />
            <span>Founder Philosophy</span>
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173C4B] leading-tight mb-4 sm:mb-6 text-center">
            Every Patient is <span className="text-[#007C88]">Family</span>
          </h2>

          <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm w-full">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#007C88]/20 mx-auto mb-3" />
            <blockquote className="text-sm sm:text-base md:text-lg text-[#364B4D] leading-relaxed italic text-justify text-justify-center">
              "Every patient is family. Every life deserves compassion, dignity, and the very best care. Inspired by the values of our late father, K. Abdul Malik, we believe that healing begins with kindness, honesty, and unwavering commitment to our patients."
            </blockquote>
          </div>

          {/* Leaders Avatars */}
          <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-8 sm:gap-14">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#E6F5F6] border-2 border-[#007C88] overflow-hidden flex items-center justify-center mb-2 shadow-xs">
                <img
                  src="/images/doctors/dr.malik.png"
                  alt="Dr. Ismail Malik - Director"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-[#007C88]">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#173C4B]">
                Dr. Ismail
              </h3>
              <p className="text-xs text-[#007C88] font-bold">Director</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#F7EBF5] border-2 border-[#680858] overflow-hidden flex items-center justify-center mb-2 shadow-xs">
                <img
                  src="/images/doctors/dr.thasleem.png"
                  alt="Dr. Z. Thasleem - Co-Director"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center text-[#680858]">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#173C4B]">
                Dr. Thasleem
              </h3>
              <p className="text-xs text-[#680858] font-bold">Co-Director</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
