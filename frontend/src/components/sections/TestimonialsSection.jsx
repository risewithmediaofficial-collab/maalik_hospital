import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare, Video, ArrowRight } from 'lucide-react'
import { Container, Badge } from '../ui/index'
import { TESTIMONIALS } from '../../data/constants'
import { useInView } from '../../hooks/index'

export default function TestimonialsSection() {
  const [ref, isInView] = useInView()
  const [current, setCurrent] = useState(0)
  const perPage = 3

  const totalPages = Math.ceil(TESTIMONIALS.length / perPage)
  const visible = TESTIMONIALS.slice(current * perPage, (current + 1) * perPage)

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white" ref={ref}>
      <Container>
        <div
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge variant="vaaris" className="mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#680858]" />
            <span>Patient Testimonials</span>
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight">
            What Our <span className="text-[#007C88]">Patients Say</span>
          </h2>
          <p className="mt-3 text-[#4A6568] text-sm sm:text-base max-w-xl mx-auto">
            Real experiences from families across Krishnagiri, Dharmapuri, Salem and Vellore who trusted us with their care.
          </p>
        </div>

        {/* Testimonial Cards Grid (Responsive 1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visible.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F9FBFC] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-100 card-hover relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#007C88]/15 absolute top-5 right-5" />

                {/* 5 Stars */}
                <div className="flex gap-1 mb-3.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xs sm:text-sm text-[#4A6568] leading-relaxed mb-5">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#E6F5F6] text-[#007C88] font-black text-sm flex items-center justify-center shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#173C4B] leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#6B8A8D] font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Arrows & Link to Video Stories */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              disabled={current === 0}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#173C4B] hover:border-[#007C88] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'bg-[#007C88] w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
            <button
              onClick={() => setCurrent((p) => Math.min(totalPages - 1, p + 1))}
              disabled={current === totalPages - 1}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#173C4B] hover:border-[#007C88] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#680858] hover:text-[#800060] bg-[#F9ECF7] hover:bg-[#F3D7EF] px-5 py-2.5 rounded-full transition-all duration-200 shadow-2xs"
          >
            <Video className="w-4 h-4 text-[#680858]" />
            <span>Watch 10+ Patient Video Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
